import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/bisaIndonesia.png',
    title: 'BISA INDONESIA',
    description:
      'Website about Caring for the Environment in accordance with SDG point 15',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: {
      preview: 'https://elginbrian.github.io/DDAP-BISA-INDONESIA',
      github: 'https://github.com/elginbrian/DDAP-BISA-INDONESIA/',
    },
  },
  {
    image: '/projects/EM.png',
    title: 'EM UB 2024',
    description:
      'Developed a responsive company profile video page EM UB 2024 (not yet deployed 😭)',
    technologies: ['React.js', 'Tailwind', 'Inertia.js'],
    links: {
      preview: 'https://em.ub.ac.id/',
      github: 'https://github.com/Eksekutif-Mahasiswa-UB/emubWeb',
    },
  },
  {
    image: '/projects/unikahidha.png',
    title: 'UNIKAHIDHA 2024',
    description:
      'Unikahidha website that focuses on Hindu spiritual and cultural development at Brawijaya University.',
    technologies: ['React', 'Inertia.js', 'Laravel', 'Tailwind', 'MySQL'],
    links: {
      preview: 'https://unikahidha.ub.ac.id/',
      github: 'https://github.com/UNIKAHIDHAUB/WebUK2024',
    },
  },
  {
    image: '/projects/urbanFest.png',
    title: 'Urban Fest',
    description:
      'Website to book a table and view the food list at Urban Feast Restaurant',
    technologies: ['React', 'Inertia.js', 'Laravel', 'Tailwind', 'MySQL'],
    links: {
      preview: '#',
      github: 'https://github.com/Weedanta/PAW-Restoran',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Head of Information Technology Publication Department KBMDSI 2025',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      "Responsible for leading the development of web publication platforms, designing digital architecture, optimizing content management, and directing web-based information technology publication strategies to increase the organization's digital visibility and interaction.",
    date: '2025 - present',
  },
  {
    title: 'Advanced Programming Practicum Assistant',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As an Advanced Programming Practicum Assistant, I teach Object-Oriented Programming (OOP) in Java, focusing on encapsulation, inheritance, polymorphism, and abstraction, while guiding students in creating dynamic Graphical User Interfaces (GUI) using tools like Swing or JavaFX.',
    date: '2024',
  },
  {
    title: 'SQL Programming Practicum Assistant FILKOM UB',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As an SQL Programming Practicum Assistant at FILKOM UB, I teach Data Definition Language (DDL) and Data Manipulation Language (DML), guiding students to master database operations like querying, CRUD (Create, Read, Update Delete), and structuring data for efficient and scalable database management.',
    date: '2024',
  },
  {
    title: 'Basic Programming Practicum Assistant FILKOM UB',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As a Basic Programming Practicum Assistant, I am responsible for teaching Java, guiding students in understanding basic programming concepts, explaining syntax, data structures, and software development methodologies, as well as providing practical directions and effective coding solutions to improve their programming skills.',
    date: '2024',
  },
  {
    title: 'Front End Developer UNIKAHIDHA 2024',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As a web developer, I designed responsive article pages with React and Tailwind CSS, built a secure admin login system with password authentication, and developed a scalable CMS using Laravel and MySQL, optimizing performance and enhancing user experience through effective state management.',
    date: '2024',
  },
  {
    title: 'Staff of Internal Resource Development Department UNIKAHIDHA 2024',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      "As a staff of UNIKAHIDHA's internal resource development department, I initiated the formation of a strong internal environment, focusing on improving the quality of the board through comprehensive internalization and building solid family ties between members, encouraging personal and collective growth of the organization.",
    date: '2024',
  },
  {
    title:
      'Ministry of Communication and Information Intern as Front-end Web Developer EM UB 2024',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As a Ministry of Communication and Information Intern and Front-end Web Developer, I developed a company profile page with responsive video, creating an intuitive user interface with advanced video playback features, including playback controls, full-screen mode, and video quality adjustment for optimal user experience across multiple devices by using React and Tailwind CSS.',
    date: '2024',
  },
  {
    title: 'Assitant Coordinator of the Competition Division HBCC 2024',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As the assistant coordinator of the competition division HBCC 2024, I contribute to the preservation of Hindu culture in the context of modern life, designing creative competitions that encourage the younger generation to explore and appreciate Hindu cultural heritage through various innovative and inspiring competition categories.',
    date: '2024',
  },
  {
    title:
      'Admin and Web Developer of Information Technology Publication Department KBMDSI 2024',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'The role of KBMDSI Admin and web developers is to channel digital information that turns articles into interesting content, through uploading, editing, and optimizing websites, with a focus on visual and informative quality, while learning React and Tailwind CSS for web development.',
    date: '2024',
  },
] as const;

export const skillsData = [
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.laravel className="size-12" /> },
  { icon: <Icons.flutter className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.mysql className="size-12" /> },
  { icon: <Icons.framerMotion className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.java className="size-12" /> },
] as const;
