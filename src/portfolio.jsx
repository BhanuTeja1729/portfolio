import React from 'react'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/BhanuTeja1729",
  title: "Bhanu Teja",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Y Bhanu Teja Reddy",
  role: "Application Engineer",
  description:
    "I'm a skilled Application Engineer with experience in building, optimizing, and maintaining software solutions. Proficient in web application frameworks like React, Vite, Django, Bootstrap, and backend technologies such as Node.js and SQL, I specialize in creating dynamic and responsive web applications. My expertise also includes integrating APIs, improving application performance, and ensuring smooth user experiences. I am passionate about leveraging technology to solve real-world problems and deliver efficient, scalable solutions. With a strong focus on collaboration, I thrive in team environments and consistently seek to enhance the development process to achieve optimal results. My commitment to continuous learning helps me stay ahead of industry trends and best practices.",
  resume:
    "https://drive.google.com/file/d/1ZgL2qaPSb6fJ0U2bCavUjEpcAC53MuKf/view?usp=sharing",
  social: {
    linkedin:
      "https://www.linkedin.com/in/yarramaddu-bhanuteja-reddy-727629333/",
    github: "https://github.com/BhanuTeja1729",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Block Ballot",
    description:
      "The Block Ballot application is a secure and scalable voting system that leverages blockchain technology to ensure transparency and trust in the electoral process. Designed for elections of various scales, the system caters to small organizations as well as larger public elections. This innovative solution combines the transparency of blockchain with the security of advanced facial recognition, ensuring a robust and trustworthy voting process.",
    responsibilities: [
      "• Designing responsive user interfaces with modern web technologies, featuring dynamic grids, dropdowns, search functionality, and conditional rendering for an intuitive user experience.",
      "• Implementing graphical representations for statistical insights and developed multiple data export formats.",
      "• Design, implement secure and scalable modules for statistics pages, integrating advanced features like Firebase-based authentication, data visualization, and conditional forms.",
      "• Ensure application quality through comprehensive unit, integration, performance, and security testing to maintain data integrity and deliver a seamless user experience.",
    ],
    stack: ["Reactjs", "MongoDB", "Express", "Node.js", "ThirdWeb SDK", "Face-Api.js"],
    sourceCode: "#",
    livePreview: "#",
  },
  {
    name: "Friends App",
    description:
      "The Friends App is a modern communication platform built using the MERN stack, enhanced with Socket.io, TailwindCSS, and Daisy UI. This application enables users to connect and interact in real-time through a seamless and intuitive interface. This project demonstrates expertise in full-stack development, real-time communication, and crafting applications that are both scalable and user-centric.",
      responsibilities: [
        "• A Dynamic real-time chat application using MERN stack, Socket.io, TailwindCSS, and Daisy UI.",
        "• Integrated JWT-based authentication and Socket.io for seamless messaging, accompanied by online user status tracking.",
        "• Proficiently deployed the application at no cost, showcasing expertise in full-stack development, real-time communication, and deployment strategies.",
        "• The application enables users to engage in live conversations, securely authenticate, and seamlessly navigate through a user-friendly interface.",
      ],
    stack: ["ReactJS", "MongoDB", "Express", "Node.js", "Socket.io"],
    sourceCode: "https://github.com/BhanuTeja1729/Chat_App",
    livePreview: "https://chat-app-3jwh.onrender.com/",
  },
  {
    name: "Care Orphans",
    description:
      "The Orphanage Support Android Application is a comprehensive platform designed to empower users to contribute to the development of orphanages and improve the living conditions of orphans. The app fosters a sense of community involvement by facilitating various forms of support and engagement. This app serves as a bridge between donors, volunteers, and orphanages, making it easier to contribute and create meaningful impacts in the lives of orphans.",
      responsibilities: [
        "• Features an organization counterpart connected to orphanages, ensuring streamlined support and communication.",
        "• Includes an admin interface to oversee and manage the app, ensuring smooth functionality and operations.",
        "• Allows users to donate money, clothes, food, and books to support orphanages.",
        "• Enables users to organize and conduct events such as educational programs, medical checkups, and more.",
      ],
      stack: ["Android Studio", "Java", "Firebase"],
    sourceCode: "https://github.com/BhanuTeja1729/care-Orphan",
    livePreview: "https://github.com/BhanuTeja1729/care-Orphan",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Material UI",
  "Tailwind CSS",
  "Daisy UI",
  "Node.js",
  "Express.js",
  "Firebase",
  "MongoDB",
  "Git",
];

const contact = {
  email: "bhanutejary@gmail.com",
};

const experiences = [
  {
    title: "Application Engineer",
    company: "Tantragyaan Solutions",
    location: "Bangalore",
    duration: "Aug 2024 - Present",
    overview:
      "Web Application Engineer creating responsive, user-friendly web applications.",
    responsibilities: [
      "• Designing responsive user interfaces with modern web technologies, featuring dynamic grids, dropdowns, search functionality, and conditional rendering for an intuitive user experience.",
      "• Structuring effective database, ensuring accurate fetching, updating, and validation of complex metadata records and relationships. Fully functional web application with dynamic forms and conditional logic.",
      "• Implementing graphical representations for statistical insights and developed multiple data export formats.",
      "• Design, implement secure and scalable modules for statistics pages, integrating advanced features like Firebase-based authentication, data visualization, and conditional forms.",
      "• Ensure application quality through comprehensive unit, integration, performance, and security testing to maintain data integrity and deliver a seamless user experience.",
      "• Secure user authentication and role-based access. Documentation for usage, deployment, and future development.",
    ],
  },
  {
    title: "Application Engineer Intern",
    company: "Tantragyaan Solutions",
    location: "Bangalore",
    duration: "Mar 2024 - Jul 2024",
    overview:
      "Web Application Intern creating responsive, user-friendly web applications.",
    responsibilities: [
      "• Designed and implemented a responsive web application for efficient billing and stock management with seamless user interactions across multiple platforms and devices.",
      "• Developed key features, including real-time inventory updates, invoice generation, and role-based access control.",
      "• Ensured data integrity and performance by optimizing database queries and conducting rigorous testing.",
      "• Perform regular updates to maintain system reliability and performance.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Varcon Technologies",
    location: "Bangalore",
    duration: "Aug 2023 - Nov 2023",
    overview:
      "Web Application Intern creating responsive, user-friendly web applications.",
    responsibilities: [
      "• Developed a highly intuitive and user-friendly fitness web application with features for detailed workout tracking, personalized goal setting, and comprehensive progress monitoring to help users achieve their fitness objectives.",
      "• Implemented real-time data synchronization for workouts and achievements, ensuring a seamless and consistent experience across multiple devices, allowing users to access their progress and updates anytime, anywhere.",
      "• Optimized the application’s performance and responsiveness by integrating advanced data management techniques and adhering to UI/UX design principles, resulting in faster load times, smoother navigation, and an enhanced user experience.",
    ],
  },
];

export { header, about, projects, skills, contact, experiences };
