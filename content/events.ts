export type EventItem = {
  slug: string;
  status: "upcoming" | "past";
  date: string;
  title: string;
  location: string;
  teaser: string;
  story?: string[];
  note?: string;
  images?: string[];
  videos?: string[];
};

export const events: EventItem[] = [
  {
    slug: "project-1billion-rammed-earth-pilot",
    status: "upcoming",
    date: "2026",
    title: "Vision South Sudan — Project -1Billion: Rammed Earth Pilot Project",
    location: "South Sudan",
    teaser:
      "Moving from prototypes and conversation to a fully constructed rammed-earth pilot house — demonstrating in practice how sustainable, locally responsive construction can address South Sudan's housing challenges.",
    note: "Follow the milestones of this project under our Sustainability page.",
  },
  {
    slug: "vision-south-sudan-2025",
    status: "past",
    date: "29–30 November 2025",
    title: "Vision South Sudan: Exhibition of Architecture",
    location: "South Sudan",
    teaser:
      "Built on the momentum of the inaugural exhibition and placed sustainability — specifically rammed-earth construction — at the heart of the conversation.",
    story: [
      "The 2025 Vision South Sudan Exhibition of Architecture, held on 29th and 30th November 2025, built on the momentum of the inaugural exhibition and placed sustainability at the heart of the conversation.",
      "Recognizing the growing housing crisis in South Sudan — not only in terms of quantity but also quality — we decided to focus this edition on rammed-earth construction and its potential role in the future of the country's built environment. The high cost of conventional construction in South Sudan is largely driven by the heavy reliance on imported materials, including cement, steel reinforcement bars, H-beams, and many other essential construction products.",
      "Rammed earth presented an opportunity to explore a different approach. As a construction method that makes greater use of locally available materials, it offers potential advantages in affordability, environmental sustainability, durability, and energy efficiency. Its thermal properties are particularly relevant to South Sudan's hot climate, as rammed-earth buildings can provide greater indoor thermal comfort and potentially reduce reliance on energy-intensive cooling systems.",
      "As part of the exhibition, we constructed two full-scale prototype rammed-earth walls, each measuring 1.5 × 1.5 metres. These prototypes allowed visitors to see and interact with the material firsthand and were well received by the public. The response reinforced our belief that people need to see, touch, and experience alternative construction methods before fully embracing them.",
      "The exhibition brought together a diverse audience, including environmental enthusiasts, government representatives, architects, engineers, students from leading institutions in Juba, businesses, and members of the general public. We also continued using virtual reality technology, building on its success during the 2024 exhibition and providing visitors with an immersive way to experience architectural projects.",
      "The 2025 exhibition ultimately set the stage for the next chapter of Vision South Sudan: moving from prototypes and conversations to a fully constructed rammed-earth pilot house. The goal is to demonstrate, in practice, how sustainable, locally responsive construction can contribute to addressing South Sudan's housing challenges.",
    ],
    images: [
      "/events/event-2025-vision-south-sudan-1.jpg",
      "/events/event-2025-vision-south-sudan-2.jpg",
      "/events/event-2025-vision-south-sudan-3.jpg",
      "/events/event-2025-vision-south-sudan-4.jpg",
      "/events/event-2025-vision-south-sudan-5.jpg",
      "/events/event-2025-vision-south-sudan-6.jpg",
      "/events/event-2025-vision-south-sudan-7.jpg",
      "/events/event-2025-vision-south-sudan-8.jpg",
    ],
  },
  {
    slug: "design-untamed-2024",
    status: "past",
    date: "25–27 October 2024",
    title: "Design Untamed: Architectural Exhibition",
    location: "Pyramid Continental Hotel, Juba",
    teaser:
      "What we believe was the first publicly recorded architectural exhibition in the history of South Sudan — showcasing the role of architecture in shaping the country's built environment.",
    story: [
      "The 2024 Vision South Sudan Architectural Exhibition themed \u201cDesign Untamed\u201d marked what we believe was the first publicly recorded architectural exhibition in the history of South Sudan. Held at the Pyramid Continental Hotel from 25th to 27th October 2024, the three-day exhibition was created to showcase the role of architecture and communicate our vision for the future of South Sudan's built environment — one that we can all be proud of.",
      "The exhibition brought together students, businesses, academics, professionals, and members of the general public to explore the power of design and the role that thoughtful, well-planned architecture can play in shaping the cities and communities we aspire to build.",
      "Four projects were showcased: a hospital, a national museum and archives, a kindergarten, and a residential villa. Each project was presented through physical architectural models, while virtual reality (VR) technology was introduced to give visitors an immersive experience of how the completed buildings could look and feel.",
      "Beyond showcasing projects, the exhibition created a platform for conversation, learning, and engagement around architecture and the future of South Sudan's built environment. It served as an important stepping stone and laid the foundation for organizing subsequent editions of the exhibition in the years that followed.",
    ],
    images: [
      "/events/event-2024-design-untamed-1.jpg",
      "/events/event-2024-design-untamed-2.jpg",
      "/events/event-2024-design-untamed-3.jpg",
      "/events/event-2024-design-untamed-4.jpg",
      "/events/event-2024-design-untamed-5.jpg",
      "/events/event-2024-design-untamed-6.jpg",
      "/events/event-2024-design-untamed-7.jpg",
    ],
    videos: [
      "/events/event-2024-design-untamed-video-1.mov",
      "/events/event-2024-design-untamed-video-2.mov",
    ],
  },
];
