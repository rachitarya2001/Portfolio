// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import clerk from './assets/tech_logo/Clerk.png';
import shadcn from './assets/tech_logo/shadcn.png'
import copilot from './assets/tech_logo/copilot.png';
import cursor from './assets/tech_logo/cursor.png'


// Experience Section Logo's
import foreign from './assets/company_logo/foreign.png';
import veritech from './assets/company_logo/veritech.jpg';


// Education Section Logo's
import Graphic from './assets/education_logo/Graphic.png'
import hec from './assets/education_logo/hec.png'
import holy from './assets/education_logo/holy.png'


// Project Section Logo's
import hotel from './assets/work_logo/hotel.png'
import interview from './assets/work_logo/interview.png';
import vehicle from './assets/work_logo/vehicle.png';
import virtual from './assets/work_logo/virtual.png';
import task from './assets/work_logo/task.png';
import cread from './assets/work_logo/cread.png';
import book from './assets/work_logo/book.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'ShadCn', logo: shadcn },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Clerk', logo: clerk },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'copilot', logo: copilot },
      { name: 'cursor', logo: cursor },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: foreign,
    role: "Frontend Developer",
    company: "ForeignAdmit",
    date: "February 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MEAN stack, managing both frontend and backend development. Collaborated with cross-functional teams to build responsive Angular-based user interfaces, implement RESTful APIs with Node.js and Express, and optimize application performance within an agile development environment.",
    skills: [
      "HTML",
      "CSS",
      "Angular",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },
  {
    id: 1,
    img: veritech,
    role: "Web Developer Inter",
    company: "Veritech oftware Service",
    date: "January 2024 - Aril 2024",
    desc: "Contributed to innovative web projects as a Web Developer, handling both frontend and backend development using technologies like HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Collaborated with the team to build responsive, high-performance websites and enhanced user experience through effective integration of modern web technologies.",
    skills: [
      "HTML",
      "CSS",
      "ReactJS",
      "JavaScript",
      "Tailwind CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Graphic,
    school: "Graphic Era University",
    date: "Aug 2022 - Jun 2024",
    desc: "I completed my Master of Computer Application (MCA) from Graphic Era University, Dehradun. The program strengthened my foundation in programming, software development, and computer science principles, covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in workshops and technical events, enhancing my technical expertise and professional development.",
    degree: "Master of Computer Application - MCA (Computer Science)",
  },
  {
    id: 1,
    img: hec,
    school: "Hec Group of Institution",
    date: "Aug 2019 - Jun 2022",
    desc: "I completed my Bachelor of Computer Application (BCA) from HEC Group of Institution, Haridwar. The program provided comprehensive training in core computing fundamentals including Data Structures and Algorithms, Web Development, and Database Management Systems. Through hands-on projects and coursework, I developed practical skills in software development while building a strong foundation in computer science principles and their real-world applications.",
    degree: "Bachelor of Computer Application - BCA (Computer Science)",
  },
  {
    id: 2,
    img: holy,
    school: "Holy Ganges Public School",
    date: "Apr 2018 - March 2019",
    desc: "I completed my class 12 education from Holy Ganges Public School, Haridwar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: holy,
    school: "Holy Ganges Public School",
    date: "Apr 2017 - March 2018",
    desc: "I completed my class 10 education from Holy Ganges Public School, Haridwar, under the CBSE board, where I studied Science.",
    degree: "CBSE(X), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Interview Monk.AI",
    description:
      "InterviewMock.AI is a powerful and user-friendly React.js application designed to simulate AI-powered mock interviews. Users can choose job roles or domains, and the app generates context-aware questions with instant feedback. Built with React.js, Gemini API, Firebase, and Clerk for authentication, it features role-based interviews, performance evaluation, response history, and a sleek ShadCN UI. The intuitive interface ensures a smooth experience, making it a go-to tool for job seekers and career coaches.",
    image: interview,
    tags: ["React (Vite)", "Gemini API", "Firebase", "Clerk authentication", "ShadCN UI"],
    github: "https://github.com/rachitarya2001/InterviewMonk.ai",
    webapp: "https://interview-mock-ai.web.app",
  },
  {
    id: 1,
    title: "CreadCast",
    description:
      "CreadCast is a full-stack social media aggregator built with React, Node.js, Express, and MongoDB. It fetches posts from Twitter and Reddit, displaying them in an interactive dashboard where users can share, save, and report content. Features include role-based Admin and User dashboards, secure authentication, and real-time updates for fresh content discovery.",
    image: cread,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JavaScript", "Twitter API", "Reddit API"],
    github: "https://github.com/rachitarya2001/CreadCast",

  },
  {
    id: 2,
    title: "Task Flow",
    description:
      "Task Flow is a role-based task management system built with React.js. Managers can assign detailed tasks (including title, description, deadline, technology, and domain) to specific employees. Employees log in to view their assigned tasks, track status, and access all task information. Features a clean, responsive UI designed to streamline project collaboration and task tracking for teams.",
    image: task,
    tags: ["React JS", "Rest API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/rachitarya2001/TaskFlow",
  },
  {
    id: 3,
    title: "Book Store Application",
    description:
      "Book Store is a MERN stack e-commerce application for online book browsing and purchasing. Users can explore books by category, view detailed descriptions, and manage their accounts securely. Features include user authentication, cart management, search functionality, and light/dark mode with a responsive UI for an optimal shopping experience.",
    image: book,
    tags: ["React JS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rachitarya2001/Book-Store-App",
  },
  {
    id: 4,
    title: "Vehicle Detection Model",
    description:
      "The Vehicle Detection Model is a computer vision project built with Python and YOLOv4 that accurately detects and classifies vehicles (cars, bikes, trucks) in real-time from images or video feeds. Uses OpenCV for image processing and SQLite database for result storage. Optimized for performance and suitable for traffic monitoring, surveillance, or smart parking applications.",
    image: vehicle,
    tags: ["Python", "YOLOv4", "Numpy", "Pandas", "Sql"],
    github: "https://github.com/rachitarya2001/Vehicle-Detection-Model",
  },
  {
    id: 5,
    title: "Virtual Classroom",
    description:
      "Virtual Classroom is a MERN stack web application that connects teachers and students online. Teachers can create classes, assign homework, and upload study materials, while students can join classes, view assignments, and submit work. Features secure role-based authentication, MongoDB data storage, and an intuitive React UI for seamless online education.",
    image: virtual,
    tags: ["React JS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rachitarya2001/Virtual-Classroom",
  },
  {
    id: 6,
    title: "Hotel Management System ",
    description:
      "The Hotel Management System is a desktop application built with Java and Swing for efficient hotel operations. It manages room bookings, customer check-ins/check-outs, and handles room details like availability, pricing, and booking dates. Features role-based access for admins and receptionists, secure data storage with Apache server, and a user-friendly GUI for streamlined hotel service management.",
    image: hotel,
    tags: ["Java Swing", "Apache Netbeans"],
    github: "https://github.com/rachitarya2001/Hotel-Management-System",
  },
];  