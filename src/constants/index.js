import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  redhat,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  aws,
  mongodb,
  git,
  ansible,
  // docker,
  dojo,
  maxfit,
  magicMem,
  tripguide,
  threejs,
  bc,
  spaceX
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Salesforce Administrator",
    icon: mobile,
  },
  {
    title: "Redhat Enterprise Linux",
    icon: backend,
  },
  {
    title: "Amazon Web Services",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "Salesforce",
    icon: redux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "RHEL",
    icon: redhat,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ansible",
    icon: ansible,
  },
  {
    name: "bc",
    icon: bc,
  },
];

export const experiences = [
  {
    title: "Salesforce Developer Intern",
    company_name: "SmartBridge",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - September 2022",
    points: [
      "Learned Salesforce Development Fundamentals with advance topics.",
      "Collaborating with cross-functional teams.",
      "Completed Salesforce Superbadges on Trailhead.",
      "Trailhead Ranger Rank.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Dojo BLog",
    description:
      "Web-based platform that allows users to write, edit, view and manage personal Blogs. Can create Profiles",
    tags: [
      {
        name: "react",
        color: " bg-gradient-to-r from-blue-500",
      },

      {
        name: "Javascript",
        color: "bg-gradient-to-r from-yellow-500",
      },
    ],
    image: dojo,
    source_code_link: "https://github.com/Omkardhurjad/dojo-blog",
  },
  {
    name: "Magic Memory",
    description:
      "Web application that enables users to play memory game with interactive and smooth experience.",
    tags: [
      {
        name: "react",
        color: " bg-gradient-to-r from-blue-500",
      },

      {
        name: "css",
        color: "bg-gradient-to-r from-pink-500",
      },
    ],
    image: magicMem,
    source_code_link: "https://github.com/Omkardhurjad/magic-memory",
  },
  {
    name: "Contact Tracing",
    description:
      "Application developed on Salesforce Platform which manages the contact of people with each other and helps to track location.",
    tags: [
      {
        name: "Salesforce",
        color: "bg-gradient-to-r from-blue-500",
      },
      {
        name: "Apex",
        color: "bg-gradient-to-r from-orange-500",
      },
      {
        name: "Aura",
        color: "bg-gradient-to-r from-pink-500",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event Management",
    description:
      "Event Management Application developed on Salesforce platform which is used to manage events with attendies and personal emails.",
    tags: [
      {
        name: "Salesforce",
        color: "bg-gradient-to-r from-blue-500",
      },
      {
        name: "Apex",
        color: "bg-gradient-to-r from-orange-500",
      },
      {
        name: "LWC",
        color: "bg-gradient-to-r from-pink-500",
      },
    ],
    image: maxfit,
    source_code_link: "https://github.com/",
  },
  {
    name: "SpaceX-Launches",
    description:
      "Analyzed and visualized SpaceX launch data to develop interactive dashboards tracking launch performance and mission outcomes. Use of NextJS and GraphQL ",
    tags: [
      {
        name: "NextJS",
        color: "bg-gradient-to-r from-blue-500",
      },
      {
        name: "Tailwind",
        color: "bg-gradient-to-r from-orange-500",
      },
      {
        name: "Apollo GraphQL",
        color: "bg-gradient-to-r from-pink-500",
      },
      {
        name: "API",
        color: "bg-gradient-to-r from-purple-500",
      },
    ],
    image: spaceX,
    source_code_link: "https://github.com/Omkardhurjad/spacex-graphql-app",
  },
];

export default {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
