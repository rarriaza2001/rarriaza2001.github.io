import type { ReactNode } from 'react';
import type { PortfolioProject } from '../data/portfolioProjects';
import { FaGithub } from 'react-icons/fa';

export function projectFolderItems(project: PortfolioProject): ReactNode[] {
  const { previewSrc } = project;

  const livePaper = (
    <div key="live" className="folder-paper-block">
      <div className="folder-paper-thumb-wrap">
        <img className="folder-paper-img folder-paper-img--muted" src={previewSrc} alt="" aria-hidden />
      </div>
    </div>
  );

  const repoPaper = (
    <div key="repo" className="folder-paper-block">
        <div className="folder-repo-tile folder-repo-tile--placeholder">
          <FaGithub style={{height: '40px', width: '40px'}}/>
        </div>
    </div>
  );

  return [livePaper, repoPaper];
}
