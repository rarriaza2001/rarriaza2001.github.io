export type PortfolioProject = {
  title: string;
  folderColor: string;
  previewSrc: string;
  previewAlt: string;
  liveUrl: string | null;
  repoUrl: string | null;
  description: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'JoinMe App',
    folderColor: '#0e4c92',
    previewSrc: '/iphone.jpeg',
    previewAlt: 'JoinMe app preview',
    liveUrl: null,
    repoUrl: 'https://github.com/rarriaza2001/JoinMeApp',
    description: 'Connect with friends nearby, create plans, and quickly see who is free to join.'
  },
  {
    title: 'ParkPortal',
    folderColor: '#2d6a8f',
    previewSrc: '/laptop.jpg',
    previewAlt: 'ParkPortal web app',
    liveUrl: null,
    repoUrl: 'https://gitlab.com/RArriaza2001/cs373-idb/-/tree/main',
    description: 'Explore theme parks by characters, locations, and rides to plan your next trip.'
  },
  {
    title: 'Jamming',
    folderColor: '#1e4976',
    previewSrc: '/computer.webp',
    previewAlt: 'Jamming project',
    liveUrl: null,
    repoUrl: null,
    description: 'Generate Spotify playlists from the hashtags used by a given Twitter account.'
  }
];
