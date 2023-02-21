// filter categories
const categories = [
  {
    name: 'All',
    filter: 'all',
  },
  {
    name: 'Landscape',
    filter: 'landscape',
  },
  {
    name: 'Portrait',
    filter: 'portrait',
  },
  {
    name: 'Nature',
    filter: 'nature',
  },
  {
    name: 'Drone',
    filter: 'drone',
  },
  {
    name: 'Animals',
    filter: 'animals',
  },
  {
    name: 'Architecture',
    filter: 'architecture',
  },

];

const images = [
  {
    id: '1',
    url: "wave.jpg",
    category: 'landscape',
    title: 'Wave',
  },
  {
    id: '2',
    url: 'architecture-1.avif',
    category: 'architecture',
    title: 'Architecture',
  },
  {
    id: '3',
    url: 'aurora-1.jpg',
    category: 'landscape',
    title: 'Aurora 1',
  },
  {
    id: '4',
    url: 'drone-6.jpg',
    category: 'drone',
    title: 'Beach and Sea from drone',
  },
  {
    id: '5',
    url: 'hills-3.jpg',
    category: 'landscape',
    title: 'Mountain',
  },
  {
    id: '6',
    url: 'drone-7.jpg',
    category: 'drone',
    title: 'Road from Drone',
  },
  {
    id: '7',
    url: 'portrait-1.jpg',
    category: 'portrait',
    title: 'Portrait 1',
  },
  {
    id: '8',
    url: 'nature-4.avif',
    category: 'nature',
    title: 'Nature',
  },
  {
    id: '9',
    url: 'hills-1.jpg',
    category: 'landscape',
    title: 'Hills',
  },
  {
    id: '11',
    url: 'portrait-2.jpg',
    category: 'portrait',
    title: 'Portrait 2',
  },
  {
    id: '12',
    url: 'lake.jpg',
    category: 'landscape',
    title: 'Lake',
  },
  {
    id: '13',
    url: 'landscape-1.jpg',
    category: 'landscape',
    title: 'Landscape lake',
  },
  {
    id: '14',
    url: 'ladscape-2.jpg',
    category: 'landscape',
    title: 'Mountain Snowy',
  },
  {
    id: '15',
    url: 'aurora-2.jpg',
    category: 'landscape',
    title: 'Aurora 2',
  },
  {
    id: '16',
    url: 'hills-2.jpg',
    category: 'landscape',
    title: 'Mountain Green',
  },
  {
    id: '17',
    url: 'portrait-3.jpg',
    category: 'portrait',
    title: 'Portrait 3',
  },
  {
    id: '18',
    url: 'portrait-4.jpg',
    category: 'portrait',
    title: 'Portrait 4',
  },
  {
    id: '19',
    url: 'portrait-5.jpg',
    category: 'portrait',
    title: 'Portrait 5',
  },
  {
    id: '20',
    url: 'portrait-6.jpg',
    category: 'portrait',
    title: 'Portrait 6',
  },
  {
    id: '21',
    url: 'portrait-7.jpg',
    category: 'portrait',
    title: 'Portrait 7',
  },
  {
    id: '22',
    url: 'animal-2.avif',
    category: 'animals',
    title: 'Animals ',
  },
  {
    id: '23',
    url: 'animal-3.avif',
    category: 'animals',
    title: 'Animals ',
  },
  {
    id: '24',
    url: 'animal-4.avif',
    category: 'animals',
    title: 'Animals ',
  },
  {
    id: '25',
    url: 'animal-5.avif',
    category: 'animals',
    title: 'Animals ',
  },
  {
    id: '26',
    url: 'drone-1.jpg',
    category: 'drone',
    title: 'Drone 1',
  },
  {
    id: '27',
    url: 'drone-2.jpg',
    category: 'drone',
    title: 'Drone 2',
  },
  {
    id: '28',
    url: 'drone-3.jpg',
    category: 'drone',
    title: 'Drone 3',
  },
  {
    id: '29',
    url: 'drone-4.jpg',
    category: 'drone',
    title: 'Drone 4',
  },
  {
    id: '30',
    url: 'nature-5.avif',
    category: 'nature',
    title: 'Nature',
  },
  {
    id: '31',
    url: 'drone-5.jpg',
    category: 'drone',
    title: 'Drone 5',
  },
  {
    id: '32',
    url: 'animal-1.avif',
    category: 'animals',
    title: 'Animals ',
  },
  {
    id: '33',
    url: 'architecture-2.avif',
    category: 'architecture',
    title: 'Architecture',
  },
  {
    id: '34',
    url: 'nature-1.avif',
    category: 'nature',
    title: 'Nature',
  },
  {
    id: '35',
    url: 'architecture-3.avif',
    category: 'architecture',
    title: 'Architecture',
  },
  {
    id: '36',
    url: 'nature-2.avif',
    category: 'nature',
    title: 'Nature',
  },
  {
    id: '37',
    url: 'architecture-4.avif',
    category: 'architecture',
    title: 'Architecture',
  },
  {
    id: '38',
    url: 'nature-3.avif',
    category: 'nature',
    title: 'Nature',
  },
  {
    id: '39',
    url: 'architecture-5.avif',
    category: 'architecture',
    title: 'Architecture',
  }

];
