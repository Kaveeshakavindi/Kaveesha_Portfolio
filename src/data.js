import p1 from "../src/assets/images/p1.png";
import p1_2 from "../src/assets/images/p1-2.png";
import p2 from "../src/assets/images/p2.png";
import p2_2 from "../src/assets/images/p2-2.png";
export const services = [
  {
    id: "01.",
    title: "Mobile APP Development",
    description:
      "Building mobile apps using React Native and Swift.",
  },
  {
    id: "02.",
    title: "Frontend web development",
    description:
      "Developing web interfaces with Next.js and React.",
  },
    {
    id: "03.",
    title: "NLP Research",
    description:
      "Exploring ontologies to enhance LLM implicit knowledge with logical reasoning.",
  },
  {
    id: "04.",
    title: "Agile Methodologies",
    description:
      "Practicing Scrum with certified training experience.",
  }
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
