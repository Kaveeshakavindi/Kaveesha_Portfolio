import p1 from '../src/assets/images/p1.png'
import p1_2 from '../src/assets/images/p1-2.png'
import p2 from '../src/assets/images/p2.png'
import p2_2 from '../src/assets/images/p2-2.png'
import p3 from '../src/assets/images/p3.png'
import p4 from '../src/assets/images/projects/rf_tuned_pred_vs_actual.png'
import p5 from '../src/assets/images/projects/conf.png'
import p6 from '../src/assets/images/projects/adventura.png'
import p7 from '../src/assets/images/projects/mealapp.png'
import p8 from '../src/assets/images/projects/dice.png'

import img18 from '../src/assets/images/18.png'
import img19 from '../src/assets/images/19.png'
import img20 from '../src/assets/images/20.png'
import img22 from '../src/assets/images/22.png'
// graphics images
//WIT
import img23 from '../src/assets/images/Graphics/wit/15.png'
import img24 from '../src/assets/images/Graphics/wit/1.png'
import img26 from '../src/assets/images/Graphics/wit/3.png'
import img27 from '../src/assets/images/Graphics/wit/4.png'
import img28 from '../src/assets/images/Graphics/wit/5.png'
import img29 from '../src/assets/images/Graphics/wit/6.png'
import img30 from '../src/assets/images/Graphics/wit/7.png'
import img31 from '../src/assets/images/Graphics/wit/8.png'
import img32 from '../src/assets/images/Graphics/wit/9.png'
import img33 from '../src/assets/images/Graphics/wit/10.png'
import img34 from '../src/assets/images/Graphics/wit/11.png'
import img35 from '../src/assets/images/Graphics/wit/12.png'
import img36 from '../src/assets/images/Graphics/wit/13.png'
import img37 from '../src/assets/images/Graphics/wit/14.png'
import img38 from '../src/assets/images/Graphics/wit/16.png'
import img39 from '../src/assets/images/Graphics/wit/17.png'
import img40 from '../src/assets/images/Graphics/wit/18.png'
import img41 from '../src/assets/images/Graphics/wit/19.png'
import img42 from '../src/assets/images/Graphics/wit/20.png'
import img43 from '../src/assets/images/Graphics/wit/21.png'
import img44 from '../src/assets/images/Graphics/wit/22.png'
import img45 from '../src/assets/images/Graphics/wit/23.png'
import img46 from '../src/assets/images/Graphics/wit/24.png'
import img47 from '../src/assets/images/Graphics/wit/25.png'
import img48 from '../src/assets/images/Graphics/wit/26.png'
import img49 from '../src/assets/images/Graphics/wit/27.png'
import img50 from '../src/assets/images/Graphics/wit/28.png'
//TIA
import img51 from '../src/assets/images/Graphics/tia/9.png'
import img52 from '../src/assets/images/Graphics/tia/1.png'
import img53 from '../src/assets/images/Graphics/tia/2.png'
import img54 from '../src/assets/images/Graphics/tia/3.png'
import img55 from '../src/assets/images/Graphics/tia/4.png'
import img56 from '../src/assets/images/Graphics/tia/5.png'
import img57 from '../src/assets/images/Graphics/tia/6.png'
import img58 from '../src/assets/images/Graphics/tia/7.png'
import img59 from '../src/assets/images/Graphics/tia/8.png'
import img60 from '../src/assets/images/Graphics/tia/10.png'
import img61 from '../src/assets/images/Graphics/tia/11.png'
//regeniq
import img62 from '../src/assets/images/Graphics/regen/2.png'
import img63 from '../src/assets/images/Graphics/regen/1.png'
import img64 from '../src/assets/images/Graphics/regen/3.png'
import img65 from '../src/assets/images/Graphics/regen/4.png'

export const services = [
  {
    id: '01.',
    title: 'Development',
    description: 'Experienced in exploratory data analysis, developing ETL pipelines, REST APIs, mobile and web applications',
    img: img18
  },
  {
    id: '02.',
    title: 'Interests',
    description:
      'Exploring methods to enhance LLM implicit knowledge with counterfactual reasoning.',
    img: img19
  },
  {
    id: '03.',
    title: 'Practice',
    description: 'Practicing Scrum with certified training experience.',
    img: img20
  },
  {
    id: '04.',
    title: 'Hobbies',
    description: 'Graphic designing and digital art.',
    img: img22
  }
]

export const projectCategories = [
  'Research',
  'UI/UX Design',
  'Web Development',
  'Mobile Development',
  'Micro Services',
  '3D Modeling',
  'State Management',
  'MongoDB',
  'React',
  'Express.js'
]

export const projectsData = [
  {
    title: 'PHQ & GAD Score Regression',
    link: 'https://github.com/Kaveeshakavindi/PHQ-GAD-Score-Regression.git',
    description:
      'Predicting baseline anxiety (GAD) and depression (PHQ) scores from momentary negative thought patterns collected via Experience Sampling Method. Best result Random Forest Regressor achieving 0.7335 of R² with 10-fold cross-validation',
    main_image: p4
  },
   {
    title: 'Steller Class Prediction',
    link: 'https://github.com/Kaveeshakavindi/steller_class_prediction.git',
    description:
      'Classify astronomical objects using Random Forest classifier achieving 96% accuracy and 0.96 weighted F1 on the Kaggle Playground Series S6E6 competition dataset. Applied robust scaling and one-hot encoding to handle outliers across  data.',
    main_image: p5
  },
  {
    title: 'ThreeJs Drone Website',
    link: 'https://ember-sooty.vercel.app',
    description:
      'Modeled every part of the drone, from blades to body with Blender version 4.4.3. Each piece was animated to simulate realistic movement, tilt and control.',
    main_image: p1
  },
  {
    title: 'Dice Rolling Game',
    description:
      'Roll the virtual dice in this Kotlin app! Challenge the computer in a thrilling game of chance, rolling five dice at a time.',
    main_image: p8,
    link: 'https://github.com/Kaveeshakavindi/Dice_rolling_game.git'
  },
  {
    title: 'Meal App',
    description:
      'Satisfy your culinary cravings with the Meal App. This Kotlin CRUD application, powered by the MealDB API, serves up a delightful experience for food enthusiasts.',
    main_image: p7,
    link: 'https://github.com/Kaveeshakavindi/Meal_App.git'
  },
  {
    title: 'Adventura',
    description:
      'A React Native travel app, helping users discover and explore tourist attractions around the globe.',
    main_image: p6,
    link: 'https://github.com/Kaveeshakavindi/Adventura.git'
  },
  {
    title: 'NextGen News Aggregator',
    link: 'https://github.com/Kaveeshakavindi/TechFeed.git',
    description:
      'This project integrates a real-time news aggregator and user authentication system using Redux Toolkit, RTK Query, and Chakra UI. It fetches articles from selected domains, supports keyword search, and allows users to bookmark articles and securely log in or sign up.',
    main_image: p2,
  },
  {
    title: 'Claract Skin',
    link: 'https://github.com/Kaveeshakavindi/claract-client',
    description:
      'Claract Skin is a skin care web application that utilise MongoDB for data storage and React for the front-end interface.',
    main_image: p3,
  }
]

export const graphicsData = [
  
  {
    project: 'Teens in AI, Sri Lanka',
    description: 'Creative work for Teens in AI, Sri Lanka',
    images: [
      {
        url: img51,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img52,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img53,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img54,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img55,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img56,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img57,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img58,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img59,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img60,
        alt: 'Teens in AI, Sri Lanka'
      },
      {
        url: img61,
        alt: 'Teens in AI, Sri Lanka'
      }
    ]
  },
  {
    project: 'RegenIQ',
    description: 'Creative work for RegenIQ',
    images: [
      {
        url: img62,
        alt: 'RegenIQ'
      },
      {
        url: img63,
        alt: 'RegenIQ'
      },
      {
        url: img64,
        alt: 'RegenIQ'
      },
      {
        url: img65,
        alt: 'RegenIQ'
      }
    ]
  },
  {
    project: 'Women in Tech, Sri Lanka',
    description: 'Creative work for WIT',
    images: [
      {
        url: img23,
        alt: 'WIT'
      },
      {
        url: img24,
        alt: 'WIT'
      },
      {
        url: img26,
        alt: 'WIT'
      },
      {
        url: img27,
        alt: 'WIT'
      },
      {
        url: img28,
        alt: 'WIT'
      },
      {
        url: img29,
        alt: 'WIT'
      },
      {
        url: img30,
        alt: 'WIT'
      },
      {
        url: img31,
        alt: 'WIT'
      },
      {
        url: img32,
        alt: 'WIT'
      },
      {
        url: img33,
        alt: 'WIT'
      },
      {
        url: img34,
        alt: 'WIT'
      },
      {
        url: img35,
        alt: 'WIT'
      },
      {
        url: img36,
        alt: 'WIT'
      },
      {
        url: img37,
        alt: 'WIT'
      },
      {
        url: img38,
        alt: 'WIT'
      },
      {
        url: img39,
        alt: 'WIT'
      },
      
      {
        url: img43,
        alt: 'WIT'
      },
      {
        url: img44,
        alt: 'WIT'
      },
      {
        url: img46,
        alt: 'WIT'
      },
      
    ]
  }
]

export const publicationsData = [
  {
    title:
      'Greenwashing Detection in Corporate ESG Reports though Neurosymbolic AI & Counterfactual Reasoning',
    description: 'Future Technologies Conference (FTC) 2026 (Accepted)'
  }
]

export const timelineData = [
  {
    year: '2024 – 2026',
    role: 'Jr. Software Engineer',
    company: 'Seylan Bank PLC, Sri Lanka',
    description:
      'Designed and developed ETL pipelines',
    type: 'work'
  },
  {
    year: '2023 – 2024',
    role: 'Mobile Engineering Intern',
    company: 'Axiata Digital Labs, Sri Lanka',
    description:
      'React Native mobile app development and Redux state management',
    type: 'work'
  },
  {
    year: '2021 - 2026',
    role: 'BEng. Software Engineering (Hons) with Placement',
    company: 'University of Westminster, UK (IIT, Sri Lanka)',
    description: '',
    type: 'education'
  },
  {
    year: '2025 - 2026',
    role: 'Creative Designer',
    company: 'Teens in AI, Sri Lanka',
    description: 'Involved in directing marketing campaigns',
    type: 'Volunteer & Leadership'
  },
  {
    year: '2023 - 2024',
    role: 'Zone Director',
    company: 'Leo District 306A1',
    description: `Contributed in the administrative tasks at zonal level. Participated in zonal leo clubs' general meetings as special guest`,
    type: 'Volunteer & Leadership'
  },
   {
    year: '2022 - 2023',
    role: 'Secretary',
    company: 'Leo Club of IIT, Sri Lanka',
    description: 'Contributed in the secretarial duties of LCIIT',
    type: 'Volunteer & Leadership'
  },
  
  {
    year: '2021 - 2022',
    role: 'IT & Marketing Director',
    company: 'Leo Club of IIT, Sri Lanka',
    description: 'Involved in directing marketing campaigns',
    type: 'Volunteer & Leadership'
  },
 
  {
    year: '2022 - 2023',
    role: 'Media Head',
    company: 'OpenHack 2.0 - Mozilla Campus Club of IIT, Sri Lanka',
    description: 'Involved in directing marketing campaigns',
    type: 'Volunteer & Leadership'
  },
  
]
