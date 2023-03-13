import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Dell,
  Paytm,
  hoobank,
  threejs,
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

const services = [
  {
    title: "UI Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Tech Blogger",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Html, Css and TailwindCss",
    workOn: "UI Tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2022 - Sept 2022",
    points: [
      "With HTML, CSS, and TailwindCss, I am able to start with the fundamentals of web development.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Javascript",
    workOn: "With JavaScript ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Javascript.",
      "I create small JavaScript projects to increase my knowledge.",
      "Putting responsive design into practise and making sure all browsers are compatible with javascript",
    ],
  },
  {
    title: "React JS",
    workOn: "With React Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "With modern ux/ui, discover new things about useState UseEffect Hooks and use of components.",
      "Built projects with react and assisted me in developing my api database skills.",
    ],
  },
  {
    title: "Tech Blog Writter",
    workOn: "Blog On Hashnode",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "A blog post was written about creating and sustaining web applications.",
      "blogged about modern ux ui",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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

const projects = [
  {
    name: "Dell E",
    description:
      "Web-based platform that allows users to search Image with the help of AI and more over we have a open source community to post the image user search.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Dell,
    source_code_link: "https://github.com/adarshchhetri9/dell-e_clone",
  },
  {
    name: "Paytm clone",
    description:
      "Paytm is an Indian multinational financial technology company, that specializes in digital payments and financial services and i have made a responsice clone with tailwind",
    tags: [
      {
        name: "htmlL",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Paytm,
    source_code_link: "https://github.com/adarshchhetri9/Paytm-Homepage",
  },
  {
    name: "Hoo Bank",
    description:
      "Hoo bank is next generation payment method and i build and deploy a fully responsive Modern UI/UX website with React JS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/adarshchhetri9/bank_mordern_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
