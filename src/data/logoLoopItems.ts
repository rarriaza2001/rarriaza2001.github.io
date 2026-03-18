import type { LogoItem } from '../components/LogoLoop/LogoLoop';

/**
 * Add more entries to rotate in the logo strip (tech stack, employers, tools).
 * Use Simple Icons CDN: https://simpleicons.org/ — pattern:
 *   https://cdn.simpleicons.org/{icon-slug}/{hex-color}
 */
export const logoLoopItems: LogoItem[] = [
  { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
  { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js' },
  { src: 'https://cdn.simpleicons.org/git/F05032', alt: 'Git' },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
  { src: 'https://cdn.simpleicons.org/pytorch/EE4C2C', alt: 'PyTorch' },
  { src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL' }
];
