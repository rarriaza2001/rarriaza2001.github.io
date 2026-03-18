import React, { useRef, useState } from 'react';
import Folder from './Folder/Folder';
import { projectFolderItems } from './ProjectFolderPapers';
import { portfolioProjects } from '../data/portfolioProjects';
import ProjectCard from './ProjectCard';

interface PortfolioCircularGalleryProps {
  itemWidthRem?: number;
}

export default function PortfolioCircularGallery({ itemWidthRem = 8 }: PortfolioCircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const dragMovedRef = useRef(false);

  const scrollToIndex = (targetIndex: number) => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>('.portfolio-strip-item'));
    const el = items[targetIndex];
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const goToIndex = (targetIndex: number, openCard: boolean = true) => {
    const total = portfolioProjects.length;
    if (!total) return;
    const next = ((targetIndex % total) + total) % total;
    setActiveIndex(next);
    if (openCard) {
      setActiveProjectIndex(next);
    }
    scrollToIndex(next);
  };

  const handleFolderClick = (index: number) => {
    if (dragMovedRef.current) {
      dragMovedRef.current = false;
      return;
    }
    if (activeProjectIndex === index) {
      goToIndex(index, false);
      setActiveProjectIndex(null);
    } else {
      goToIndex(index);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    setIsPointerDown(true);
    setIsDragging(false);
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX - container.offsetLeft;
    dragStartScrollRef.current = container.scrollLeft;
  };

  const endDrag = () => {
    if (!isPointerDown && !isDragging) return;
    setIsDragging(false);
    setIsPointerDown(false);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      return;
    }
    endDrag();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      return;
    }
    endDrag();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') {
      return;
    }
    if (!isPointerDown) return;
    const container = containerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const delta = x - dragStartXRef.current;
    if (!isDragging && Math.abs(delta) > 8) {
      setIsDragging(true);
    }
    if (!isDragging) return;
    const walk = delta * 0.9;
    if (Math.abs(walk) > 5) {
      dragMovedRef.current = true;
    }
    container.scrollLeft = dragStartScrollRef.current - walk;
  };

  return (
    <div className="portfolio-strip-shell">
      <div
        className="portfolio-strip-gallery"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <div className="portfolio-strip-track">
          <div className="portfolio-strip-spacer" aria-hidden="true" />
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className={`portfolio-strip-item ${index === activeIndex ? 'is-active' : ''}`}
              style={{ '--item-index': index, '--item-width-rem': `${itemWidthRem}` } as React.CSSProperties}
            >
              <Folder
                color={project.folderColor}
                size={1}
                items={projectFolderItems(project)}
                isOpen={activeProjectIndex === index}
                onToggle={() => handleFolderClick(index)}
              />
              <h3>{project.title}</h3>
            </div>
          ))}
          <div className="portfolio-strip-spacer" aria-hidden="true" />
        </div>
      </div>
      {activeProjectIndex !== null && portfolioProjects[activeProjectIndex] && (
        <ProjectCard
          project={portfolioProjects[activeProjectIndex]}
          onClose={() => setActiveProjectIndex(null)}
        />
      )}
    </div>
  );
}

