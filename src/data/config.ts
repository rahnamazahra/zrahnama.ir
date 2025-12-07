const config = {
  title: "Zahra Rahnama | Laravel Developer",
  description: {
    long: "Laravel developer with strong experience in backend development, API design, and building scalable SaaS architectures. Skilled in writing clean, optimized code, applying software design patterns (such as Strategy Pattern), and working with relational databases. Passionate about solving complex backend challenges and continuously improving system performance. Always eager to learn, grow, and collaborate with innovative development teams.",
    short:
      "Laravel developer specializing in backend development, API design, and scalable SaaS architectures.",
  },
  keywords: [
    "Zahra Rahnama",
    "Laravel Developer",
    "Backend Developer",
    "PHP",
    "Laravel",
    "REST API",
    "SaaS",
    "API Design",
    "MySQL",
    "Design Patterns",
    "Repository Pattern",
    "Service Pattern",
    "Strategy Pattern",
    "SOLID",
    "Clean Code",
    "Swagger",
    "Git",
    "Queue Systems",
    "Webhooks",
    "SSO",
    "portfolio",
    "web development",
  ],
  author: "Zahra Rahnama",
  email: "rhnm.zahra@gmail.com",
  phone: "09306756076",
  location: "Istanbul, Türkiye",
  site: "https://zrahnama.ir",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/zahrarahnama/",
    github: "",
    personal: "https://zrahnama.ir/",
  },
};
export { config };
