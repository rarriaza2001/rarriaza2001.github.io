import type { ReactNode } from 'react';
import type { PortfolioProject } from '../data/portfolioProjects';

const GITHUB_ICON = 'https://cdn.simpleicons.org/github/181717';
const GITLAB_ICON = 'https://cdn.simpleicons.org/gitlab/FC6D26';

function repoIconUrl(repoUrl: string): string {
  if (repoUrl.includes('gitlab')) return GITLAB_ICON;
  return GITHUB_ICON;
}

function repoLabel(repoUrl: string): string {
  if (repoUrl.includes('gitlab')) return 'GitLab';
  return 'GitHub';
}

export function projectFolderItems(project: PortfolioProject): ReactNode[] {
  const { previewSrc, previewAlt, liveUrl, repoUrl } = project;

  const livePaper = (
    <div key="live" className="folder-paper-block">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="folder-paper-thumb-link"
          aria-label={`Open live demo: ${project.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          <img className="folder-paper-img" src={previewSrc} alt={previewAlt} />
        </a>
      ) : (
        <div className="folder-paper-thumb-wrap">
          <img className="folder-paper-img folder-paper-img--muted" src={previewSrc} alt="" aria-hidden />
        </div>
      )}
    </div>
  );

  const repoPaper = (
    <div key="repo" className="folder-paper-block">
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="folder-repo-tile"
          aria-label={`${repoLabel(repoUrl)}: ${project.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          <img className="folder-repo-brand-icon" src={repoIconUrl(repoUrl)} alt="" />
        </a>
      ) : (
        <div className="folder-repo-tile folder-repo-tile--placeholder">
          <img className="folder-repo-brand-icon folder-repo-brand-icon--muted" src={GITHUB_ICON} alt="" />
        </div>
      )}
    </div>
  );

  return [livePaper, repoPaper];
}
