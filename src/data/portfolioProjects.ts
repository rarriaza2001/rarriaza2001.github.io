export type PortfolioProject = {
  title: string;
  folderColor: string;
  previewSrc: string;
  previewAlt: string;
  liveUrl: string | null;
  repoUrl: string | null;
  blurb: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'JoinMe App',
    folderColor: '#0e4c92',
    previewSrc: '/iphone.jpeg',
    previewAlt: 'JoinMe app preview',
    liveUrl: null,
    repoUrl: 'https://github.com/rarriaza2001/JoinMeApp',
    blurb: 'Connect with friends nearby — create or join plans.'
  },
  {
    title: 'ParkPortal',
    folderColor: '#2d6a8f',
    previewSrc: '/laptop.jpg',
    previewAlt: 'ParkPortal web app',
    liveUrl: null,
    repoUrl: 'https://gitlab.com/RArriaza2001/cs373-idb/-/tree/main',
    blurb: 'Find theme parks by characters, locations, and rides.'
  },
  {
    title: 'Jamming',
    folderColor: '#1e4976',
    previewSrc: '/computer.webp',
    previewAlt: 'Jamming project',
    liveUrl: null,
    repoUrl: null,
    blurb: "Spotify playlists from a Twitter account's hashtags."
  }
];
