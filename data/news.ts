export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const news: NewsArticle[] = [
  {
    slug: "the-future-of-clean-energy",
    title: "Rethinking the Future of Clean Energy",
    category: "Energy Innovation",
    date: "October 10, 2026",
    image: "/images/solar-project.jpg",
    excerpt:
      "Exploring how renewable energy and innovative thinking can shape a more responsible energy future.",
    content: [
      "The transition toward a more responsible energy future begins with curiosity, collaboration, and a willingness to explore new possibilities.",
      "Solar and wind energy offer opportunities to rethink how energy can be produced and used. Continued innovation and thoughtful planning are important parts of this journey.",
      "At Terra Energy, we use this concept to highlight the importance of exploring ideas that put long-term progress and environmental responsibility at the center.",
    ],
  },
  {
    slug: "building-a-sustainable-tomorrow",
    title: "Building a More Sustainable Tomorrow",
    category: "Sustainability",
    date: "October 18, 2026",
    image: "/images/wind-project.jpg",
    excerpt:
      "Discover why collaboration, responsible decisions, and long-term thinking matter for a sustainable future.",
    content: [
      "A more sustainable tomorrow is shaped by the decisions made today. Responsible planning helps us consider the long-term impact of the choices we make.",
      "Collaboration is also essential. Communities, organizations, and innovators can share ideas and perspectives to explore solutions to complex energy challenges.",
      "As a conceptual energy company, Terra Energy places these principles at the heart of its vision for future progress.",
    ],
  },
];
