export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "solar-farm-project",
    title: "Solar Horizons",
    category: "Solar Energy",
    location: "West Java, Indonesia",
    image: "/images/solar-project.jpg",
    description:
      "An imagined solar energy initiative exploring how sunlight can contribute to a more sustainable energy future.",
    year: "2025",
  },
  {
    slug: "wind-energy-innovation",
    title: "Wind Forward",
    category: "Wind Energy",
    location: "South Sulawesi, Indonesia",
    image: "/images/wind-project.jpg",
    description:
      "An imagined wind energy initiative focused on innovation and the potential of renewable resources.",
    year: "2026",
  },
];
