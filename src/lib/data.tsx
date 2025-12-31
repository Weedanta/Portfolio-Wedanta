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
      'Website about Caring for the Environment in accordance with SDG point 15.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: {
      preview: 'https://elginbrian.github.io/DDAP-BISA-INDONESIA',
      github: 'https://github.com/elginbrian/DDAP-BISA-INDONESIA/',
    },
  },
  {
    image: '/projects/code_camp.png',
    title: 'Code Camp',
    description:
      'An app for bootcamp learning and CV creation to boost skills and support career growth.',
    technologies: ['HTML', 'PHP', 'JavaScript', 'Tailwind'],
    links: {
      preview: '#',
      github: 'https://github.com/Weedanta/Code-Camp',
    },
  },
  {
    image: '/projects/EM.png',
    title: 'EM UB 2024',
    description:
      'Created a fully responsive magazine & company profile video page for EM UB 2024, optimized for all devices.',
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
      'Website to book a table and view the food list at Urban Feast Restaurant.',
    technologies: ['React', 'Inertia.js', 'Laravel', 'Tailwind', 'MySQL'],
    links: {
      preview: '#',
      github: 'https://github.com/Weedanta/PAW-Restoran',
    },
  },
  {
    image: '/projects/fakestore.png',
    title: 'Fake Store',
    description:
      'Built a responsive fake store interface using the Fake Store API to display products dynamically.',
    technologies: ['Flutter', 'Dart', 'GetX', 'Rest API'],
    links: {
      preview: '#',
      github: 'https://github.com/Weedanta/Aibeecara_Project',
    },
  },
  {
    image: '/projects/game_queue.png',
    title: 'Game Queue',
    description:
      'GameQueue lets UB students easily book Game Corner consoles in real-time with quick admin approval.',
    technologies: ['Java', 'Kotlin', 'Firebase', 'Android'],
    links: {
      preview: 'https://youtu.be/hwlHg0BkWIM',
      github: 'https://github.com/PressToCode/GameQueue',
    },
  },
  {
    image: '/projects/rocket.svg',
    title: 'Nasa Facts',
    description:
      'Explore NASA daily space images—new cosmic wonders every day from our vast universe.',
    technologies: ['Next.js', 'Tailwind', 'Supabase', 'TypeScript'],
    links: {
      preview: 'https://nasafacts.my.id',
      github: 'https://github.com/Weedanta/Tugas-Akhir-TIS',
    },
  },
  {
    image: '/projects/itfest-logo.png',
    title: 'IT FEST 2025',
    description:
      'IT FEST 2025 is a national tech competition that encourages youth to create innovative, impactful solutions.',
    technologies: ['Next.js', 'Tailwind', 'Go', 'TypeScript'],
    links: {
      preview: 'https://itfest-filkom.com',
      github: 'https://github.com/syaquiii/IT-FEST-2025/',
    },
  },
  {
    image: '/projects/DesaSenggreng.png',
    title: 'Desa Senggreng',
    description:
      'Senggreng village website showcasing tourism, culture, and local small businesses',
    technologies: ['Next.js', 'Tailwind', 'TypeScript'],
    links: {
      preview: 'https://desa-senggreng.vercel.app',
      github: 'https://github.com/Weedanta/Desa-Senggreng',
    },
  },
  {
    image: '/projects/LogoRabraw.png',
    title: 'Raja Brawijaya',
    description:
      'Smart Website for Managing attendance and meals for 850+ committee with speed, accuravy, and ease',
    technologies: ['Next.js', 'Tailwind', 'TypeScript'],
    links: {
      github: 'https://github.com/RAJA-Brawijaya-2025/INTERNALAJA/',
    },
  },
  {
    image: '/projects/kbmdsi.webp',
    title: 'KBMDSI 2025',
    description:
      'Official KBMDSI 2025 website built as a central platform for organizational information and activities.',
    technologies: ['Laravel', 'React', 'Tailwind', 'MySQL'],
    links: {
      preview: 'https://kbmdsi.ub.ac.id/',
      github: 'https://github.com/KBMDSI/KBMDSI_NEWBANGET',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Head of Information Technology Publication Department KBMDSI 2025',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      "Responsible for leading the development of web publication platforms, designing digital architecture, optimizing content management, and directing web-based information technology publication strategies to increase the organization's digital visibility and interaction.",
    date: '2025',
  },
  {
    title: 'Publication and Information Technology (PIT) Staff',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'PIT staff for RAJA Brawijaya 2025, contributing to the development of web-based attendance and operational systems used by 850+ committee members during the event.',
    date: '2025',
  },
  {
    title: 'Web Develope Tini Salon',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'Built a company profile website for Tini Salon featuring service information and training programs, designed with a clean and responsive interface for easy content updates.',
    date: '2025',
  },
  {
    title: 'Lead Organizer Coding Services',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'Led the Coding Services program by managing the planning and development of multiple web platforms to support digital needs and improve coordination across KBMDSI departments.',
    date: '2025',
  },
  {
    title: 'Programmer Desa Senggreng',
    location: 'Malang Regency, Jawa Timur, Indonesia',
    description:
      'Developed a village website for Desa Senggreng, including the village profile, information for 4 tourism destinations, and showcases for 4 local UMKM to support digital promotion and community outreach.',
    date: '2025',
  },
  {
    title: 'Front-End Developer IT FEST FILKOM',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'Developed a responsive competition registration website for IT FEST FILKOM, including team data management, category selection, and form validation to ensure accurate submissions and a smooth user experience.',
    date: '2025',
  },

  {
    title: 'Data Structure Algorithm Lab Assistant',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'Teaching Assistant for the Algorithm and Data Structure course, guiding 30+ students in understanding core concepts, assisting in lab sessions, grading, and supporting practical problem-solving activities.',
    date: '2025',
  },
  {
    title: 'SQL Programming Practicum Assistant FILKOM UB',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As an SQL Practicum Assistant at FILKOM UB, I teach DDL and DML to 50+ students across 2 classes, guiding them in querying, CRUD operations, and efficient database structuring for scalable data management.',
    date: '2025',
  },
  {
    title: 'Speaker for the Sinau Bareng',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As a speaker for the *Sinau Bareng* session attended by over 40 participants, I explained and discussed fundamental programming (Pemdas) problems, helping students strengthen their logic, algorithmic thinking, and problem-solving skills.',
    date: '2025',
  },
  {
    title: 'Advanced Programming Practicum Assistant',
    location: 'Malang City, Jawa Timur, Indonesia',
    description:
      'As an Advanced Programming Practicum Assistant, I teach OOP in Java to 35+ students, focusing on encapsulation, inheritance, polymorphism, and abstraction, while guiding them in building dynamic GUIs using Swing and JavaFX.',
    date: '2025',
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
