import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  verozone,
  brightchamps,
  dirasa,
  fullstack,
  windowsapllication,
  gymgenius,
  ecommerce,
  pizzajoy,
  schoolsystem,
  kime,
  onlineshop,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Windows applications developer",
    icon: windowsapllication,
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Collaborated with a team of developers on various freelance projects, contributing expertise in React.js, Laravel, TypeScript, and other technologies.",
      "Demonstrated proficiency in frontend development with skills in HTML5, CSS, Tailwind CSS and JavaScript.",
      "Utilized version control tools such as Git and GitHub for efficient project management and teamwork.",
      "Implemented backend solutions using PHP and Laravel to enhance project functionality and performance.",
      "Designed and maintained robust databases using SQL and MySQL to store and manage project data efficiently.",
      "Utilized Prisma to streamline database interactions and optimize data retrieval processes, enhancing overall system performance.",
    ],
  },
  {
    title: "Information Technology Instructor",
    company_name: "Educación Dirasa",
    icon: dirasa,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Verozone Solutions EG",
    icon: verozone,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Worked as an intern, gaining hands-on experience in frontend development.",
      "Utilized HTML5, JavaScript, and CSS to create responsive and visually appealing user interfaces.",
      "Developed web applications using React.js and maintained clean, efficient code.",
      "Gained proficiency in Bootstrap for efficient web development.",
      "Collaborated with Git and GitHub for version control and team collaboration.",
    ],
  },
  {
    title: "Coding Instructor",
    company_name: "brightchamps",
    icon: brightchamps,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Delivered engaging coding lessons to students, using Scratch and educational technology to foster interactive learning experiences.",
      "Implemented HTML5 and Cascading Style Sheets (CSS) to create visually appealing and interactive educational content.",
      "Demonstrated effective coaching and negotiation skills while working with students, fostering a positive learning environment.",
      "Leveraged analytical skills to assess student progress and adapt teaching methods accordingly, resulting in improved coding experiences.",
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
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/MhamadSaid/E-Commerce",
  },

  {
    name: "GYMGENESIS",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: gymgenius,
    source_code_link: "https://github.com/MhamadSaid/Gym-Website",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pizzajoy,
    source_code_link: "https://github.com/MhamadSaid/Restaurant-menu",
  },
  {
    name: "GYMGENESIS",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: kime,
    source_code_link: "https://github.com/MhamadSaid/Kime",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: onlineshop,
    source_code_link: "https://github.com/MhamadSaid/Online-Shop",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: schoolsystem,
    source_code_link: "https://github.com/MhamadSaid/School-Management-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
