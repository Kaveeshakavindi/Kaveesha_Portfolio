import p1 from "../src/assets/images/p1.png";
import p1_2 from "../src/assets/images/p1-2.png";
import p2 from "../src/assets/images/p2.png";
import p2_2 from "../src/assets/images/p2-2.png";
export const services = [
  {
    id: "01.",
    title: "Frontend Development",
    description:
      "Creative frontend development using modern technologies and trends. I believe in telling stories through design — keeping it simple, clear, and engaging so users intuitively understand what to do and where to go.",
  },
  {
    id: "02.",
    title: "Backend Logic & Problem Solving",
    description:
      "From designing robust RESTful and GraphQL APIs to implementing logic with Express.js, Spring Boot, or ASP.NET Core — I build backends that are efficient, secure, and scalable. Understanding the right ORM for each stack helps make data handling smoother and cleaner.",
  },
  {
    id: "03.",
    title: "Certified Scrum Master",
    description:
      "Agile isn't just a buzzword — it's how I deliver results. As a Certified Scrum Master, I bring proven practices into real-world development: leading sprints, refining backlogs, enabling CI/CD pipelines, and fostering a collaborative team culture. The certification backs my experience with trust and credibility.",
  },
  {
    id: "04.",
    title: "3 Years of Experience",
    description:
      "With over three years of hands-on experience, I’ve built full-stack applications across industries — including fintech platforms, mobile apps, web portals, and enterprise solutions.",
  },
  {
    id: "05.",
    title: "UI/UX Design",
    description:
      "From sketching ideas in Figma to refining them in InDesign, I’ve explored various design tools to craft thoughtful, intuitive interfaces. I focus on merging usability with visual appeal, using technologies like Figma and Adobe InDesign",
  },
];
export const workData = [
  {
    title: "Portfolio Website",
    description:
      "A sleek portfolio website showcasing creativity and skills, crafted with React.js.",
    imgUrl: "./images/portfolio.png",
    skills: ["React", "JavaScript", "CSS"],
    href: "https://github.com/Kaveeshakavindi/Kaveesha_Portfolio.git",
  },
  {
    title: "Craft Masters",
    description:
      "Experience craftsmanship at its finest! Craft Masters, a React Native app, connects users with skilled craftsmen, featuring a stylish dark and light theme.",
    imgUrl: "./images/craftmasters.png",
    skills: ["React Native", "JavaScript", "Figma"],
    href: "https://github.com/Kaveeshakavindi/Horizontally-scrollable-tab-bar.git",
  },
  {
    title: "Adventura",
    description:
      "Embark on a journey with Adventura, a React Native travel app, helping users discover and explore tourist attractions around the globe.",
    imgUrl: "./images/adventura.png",
    skills: ["React Native", "TypeScript", "Figma"],
    href: "https://github.com/Kaveeshakavindi/Adventura.git",
  },
  {
    title: "Blueberi",
    description:
      "Elevate your style with Blueberi, an e-commerce clothing website. Built with React.js and TypeScript, it offers a seamless shopping experience.",
    imgUrl: "./images/blueberi.png",
    skills: ["React", "TypeScript", "CSS", "Figma"],
    href: "https://github.com/Kaveeshakavindi/Blueberi.git",
  },
  {
    title: "Dice Rolling Game",
    description:
      "Roll the virtual dice in this Kotlin app! Challenge the computer in a thrilling game of chance, rolling five dice at a time.",
    imgUrl: "./images/dice.png",
    skills: ["Kotlin", "Figma"],
    href: "https://github.com/Kaveeshakavindi/Dice_rolling_game.git",
  },
  {
    title: "Meal App",
    description:
      "Satisfy your culinary cravings with the Meal App. This Kotlin CRUD application, powered by the MealDB API, serves up a delightful experience for food enthusiasts.",
    imgUrl: "./images/mealapp.png",
    skills: ["Kotlin", "MealDB API", "Figma"],
    href: "https://github.com/Kaveeshakavindi/Meal_App.git",
  },
];

export const projectCategories = [
  "Research",
  "UI/UX Design",
  "Web Development",
  "Mobile Development",
  "Micro Services",
  "3D Modeling",
  "State Management",
];

export const projectsData = [
  {
    title: "ThreeJs Drone Website",
    categories: [projectCategories[2], projectCategories[5]],
    link: "https://ember-sooty.vercel.app",
    description:
      "Modeled every part of the drone—from blades to body—with attention to realistic detail, giving it a tangible, almost tactile digital form with Blender version 4.4.3. Each piece was measured, designed, and animated to simulate realistic movement, tilt, and control as it would behave physically.",
    main_image: p1,
    sub_image: p1_2,
  },
  {
    title: "NextGen News Aggregator",
    categories: [projectCategories[2], projectCategories[6]],
    link: "https://github.com/Kaveeshakavindi/TechFeed.git",
    description:
      "This project integrates a real-time news aggregator and user authentication system using Redux Toolkit, RTK Query, and Chakra UI. It fetches articles from selected domains, supports keyword search, and allows users to bookmark articles and securely log in or sign up.",
    main_image: p2,
    sub_image: p2_2,
  },
];
