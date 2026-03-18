import type { PortfolioProject } from '../data/portfolioProjects';

interface ProjectCardProps {
  project: PortfolioProject;
  onClose?: () => void;
}

export default function ProjectCard({ project, onClose }: ProjectCardProps) {
  const { title, description, previewSrc, liveUrl, repoUrl } = project;

  return (
    <article className="project-card">
      {onClose && (
        <button type="button" className="project-card__close" onClick={onClose} aria-label="Close project details">
          ×
        </button>
      )}
      <div className="project-card__media">
        <img src={previewSrc} alt={title} className="project-card__image" />
        <div className="project-card__media-overlay" />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        {description && <p className="project-card__body">{description}</p>}
        <div className="project-card__footer">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid btn-liquid--solid project-card__button"
            >
              View live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid project-card__button"
            >
              View repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

