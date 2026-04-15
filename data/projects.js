const projects = [
  {
    id: 1,
    title: "Gardenia Convention Center Management System",
    slug: "convention-center-management-system",
    description:
      "A full-stack convention center management system with a public-facing website and an admin panel to handle event scheduling, bookings, and operations with strict business rules.",
    image: "/projects/gardenia.png",
    tech_stack: [
      "ReactJS",
      "TailwindCSS",
      "Nodejs",
      "ExpressJS",
      "JWT",
      "MongoDB",
    ],
    freelance: true,
    github: null,
    public: "https://www.gardeniaconventioncenter.in/",
    featured: true,
  },
  {
    id: 2,
    title: "Prototype Ecommerce Application (Admin Panel)",
    slug: "prototype-ecommerce-application",
    description:
      "A prototype eCommerce admin panel for online stores with dynamic product creation using category-based attributes. Supports full CRUD for products, categories, brands, attributes, and users.",
    image: "/projects/prototype.png",
    tech_stack: [
      "NodeJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "JWT",
      "MongoDB",
      "Cloudinary",
    ],
    freelance: false,
    github: "https://github.com/BizdataTech/prototype_main_frontend",
    public: null,
    featured: true,
  },
  {
    id: 3,
    title: "Spare Parts Ecommerce Application",
    slug: "spare-parts-ecommerce-application",
    description:
      "Spare parts eCommerce app with vehicle-based product mapping and genuine/OEM/aftermarket linking. Includes full CRUD, order management, and client features like search, cart, wishlist, checkout, and order tracking.",
    image: "/projects/spareparts.png",
    tech_stack: [
      "NodeJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "JWT",
      "MongoDB",
      "Cloudinary",
    ],
    freelance: false,
    github: "https://github.com/BizdataTech/sparepart_frontend",
    public: null,
    featured: true,
  },
  {
    id: 4,
    title: "Elara Health AI Static Website",
    slug: "elara-health-ai-static-website",
    description:
      "A static website for a healthcare startup showcasing the problem, proposed solution, and how the product works. Focused on clear communication and a clean, user-friendly UI.",
    image: "/projects/elara.png",
    tech_stack: ["ReactJS", "TailwindCSS"],
    freelance: true,
    github: null,
    public: "https://elarahealthai.vercel.app/",
    featured: false,
  },
];

export default projects;
