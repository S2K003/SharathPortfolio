/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sharath",
  title: "Hi all, I'm Sharath",
  subTitle: emoji(
    "Passionate IT student skilled in full-stack development, AI, and smart solutions with strong leadership, problem-solving, and teamwork abilities."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1q1TksPSnxrf7Cro1zXu9PZf3MF-acLsy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/S2K003",
  linkedin: "https://www.linkedin.com/in/sharath-s-t-362b89279/",
  gmail: "stsharath13@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR AI AND MODERN WEB TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly interactive front-end user interfaces and responsive web applications using React.js and Tailwind CSS"
    ),
    emoji(
      "⚡ Build scalable back-end APIs with Node.js, Express.js, and MongoDB for full-stack solutions"
    ),
    emoji(
      "⚡ Implement AI/ML models for real-time applications leveraging TensorFlow, PyTorch, YOLOv8, and OpenCV"
    ),
    emoji(
      "⚡ Integrate third-party services including Razorpay payment gateway, Firebase authentication, and JWT-based security"
    )
  ],

  softwareSkills: [
    { skillName: "html5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "javascript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "typescript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "mongodb", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "tensorflow", fontAwesomeClassname: "fas fa-brain" }, // generic icon
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "cybersecurity", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "cloud-computing", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "machine-learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "data-science", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "opencv", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "rest-api", fontAwesomeClassname: "fas fa-link" }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of New South Wales",
      logo: require("./assets/images/placeholder.png"),
      subHeader: "Master of Information Technology",
      duration: "Expected 2025 - 2027",
      desc: "Pursuing advanced coursework and research in information technology, focusing on software development, AI, and data science.",
      descBullets: [
        "Gaining expertise in AI, machine learning, cloud computing, and cybersecurity.",
        "Engaging in collaborative projects and hands-on practical learning."
      ]
    },
    {
      schoolName: "PSG College of Technology",
      logo: require("./assets/images/psgLogo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2021 - 2025",
      desc: "Completed foundational and advanced courses in IT including data structures, algorithms, database systems, AI, and web technologies.",
      descBullets: [
        "Undertook a project internship developing a full-stack smart parking system using MERN stack and AI technologies.",
        "Applied knowledge of machine learning, deep learning, and software engineering principles.",
        "Built projects using YOLOv8, EasyOCR, OpenCV, and microservices for real-time computer vision tasks.",
        "Completed academic coursework in areas including DSA, DBMS, Operating Systems, and Computer Networks.",
        "Developed full-stack applications using React, Node.js, Express.js, and MongoDB with user authentication.",
        "Participated in technical symposiums and presented innovative AI-based solutions for smart city applications.",
        "Contributed to collaborative coding environments using Git, GitHub, and Agile development practices.",
        "Gained experience in deploying applications using Docker and integrating APIs like Razorpay and Firebase."
      ]
    },
    {
      schoolName: "Stanes School",
      logo: require("./assets/images/stanesSchoolLogo.png"),
      subHeader: "Grade XII - ISC",
      duration: "2021",
      desc: "Completed higher secondary education with a focus on Maths, Science and Computer Science.",
      descBullets: []
    },
    {
      schoolName: "Stanes School",
      logo: require("./assets/images/stanesSchoolLogo.png"),
      subHeader: "Grade X - ISC",
      duration: "2019",
      desc: "Completed secondary education with strong academic performance.",
      descBullets: []
    }
  ]
};



const techStack = {
  viewSkillBars: true, // Show proficiency section
  experience: [
    {
      Stack: "Frontend/UI Development",
      progressPercentage: "85%" // Strong React, Tailwind CSS, responsive design skills
    },
    {
      Stack: "AI Model Development & Training",
      progressPercentage: "85%" // Experience with YOLOv8, TensorFlow, PyTorch, EasyOCR
    },
    {
      Stack: "Backend Development",
      progressPercentage: "100%" // Node.js, Express.js, MongoDB, REST APIs
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Project Intern - Full Stack Developer",
      company: "Ezio Solution Private Limited",
      companylogo: require("./assets/images/eziologo.png"), // Add your company logo here
      date: "Dec 2023 – May 2024",
      desc: "Completed an industrial project internship as part of Bachelor’s degree curriculum focused on designing and developing scalable full-stack web applications.",
      descBullets: [
        "Led a team of 4 members to design, develop, and deploy a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Developed and integrated JWT-based authentication and role-based access control to secure application endpoints.",
        "Implemented RESTful APIs for seamless communication between front-end and back-end services.",
        "Designed responsive and interactive UI components with React.js and Tailwind CSS to enhance user experience across devices.",
        "Collaborated with UI/UX designers and project managers to translate business requirements into technical solutions.",
        "Optimized application performance by implementing efficient database queries and caching strategies.",
        "Conducted unit and integration testing using Jest and Postman to ensure code quality and reliability.",
        "Participated in daily Agile scrum meetings and contributed to sprint planning and retrospectives.",
        "Gained hands-on experience with version control using Git and CI/CD pipelines for streamlined deployment.",
        "Enhanced skills in debugging, troubleshooting, and problem-solving in a fast-paced development environment."
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME INNOVATIVE SOLUTIONS AND INDUSTRIAL PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/eziologo.png"),
      projectName: "Full Stack Web App – Internship @ Ezio Solutions",
      projectDesc: [
        "Led the design and development of a full-stack enterprise web application using the MERN stack.",
        "Implemented user authentication with JWT and role-based access control.",
        "Integrated RESTful APIs and MongoDB for real-time database updates.",
        "Contributed to backend API performance optimization and secure endpoint structuring.",
        "Delivered a scalable platform ready for industry deployment."
      ],
      footerLink: [
        {
          name: " Project Demo",
          url: "https://youtu.be/jao8ttiN7zQ", // Replace with actual link
          iconifyClass: "fab fa-youtube" // YouTube icon
        }
      ]
    },
    {
      image: require("./assets/images/smartParkingLogo.webp"),
      projectName: "AI-Powered Smart Parking Guidance System",
      projectDesc: [
        "Developed an AI-powered vehicle detection system using YOLOv8 and EasyOCR.",
        "Achieved over 96% accuracy in license plate recognition under varied conditions.",
        "Architected 9 microservices for modular deployment and fault tolerance.",
        "Built a responsive MERN stack frontend with real-time QR-based access.",
        "Integrated Razorpay for billing and Firebase for user notifications.",
        "Compared model performance with CNN and PSO for intelligent slot assignment.",
        "Designed for smart city scalability with complete CRUD-based admin dashboard."
      ],
      footerLink: [
        {
          name: " Project Demo ",
          url: "https://youtu.be/-QKIJsfQEYc", // Replace with actual link
          iconifyClass: "fab fa-youtube" // YouTube icon
        }
      ]
    },
      {
  "image": require("./assets/images/placeholder.png"), // Replace with actual image path
  "projectName": "Coimbatore Local Bus App ",
  "projectDesc": [
    "Developed a cross-platform mobile application using React Native and Expo for accessing local bus information in Coimbatore.",
    "Implemented a local SQLite database to store and manage bus routes, schedules, and stop details.",
    "Designed an intuitive user interface for efficient searching and viewing of bus information.",
    "Focused on providing essential details for commuters to navigate Coimbatore's local bus network."
  ],
  "footerLink": [
    {
      "name": "Project Demo",
      "url": "https://youtu.be/q2FjttCUDc8", // Replace with actual link
      "iconifyClass": "fab fa-youtube" // YouTube icon or relevant icon
    }
  ]
}
  ],
  display: true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Publications & Research Contributions 📚",
  subtitle:
    "Selected research papers, certifications, and articles showcasing my work in AI, smart systems, and emerging technologies.",

  achievementsCards: [
    {
      title: "Smart Parking Solutions",
      subtitle:
        "Co-authored a comprehensive review paper analyzing AI and deep learning models in smart parking and urban traffic systems. Explored and compared cutting-edge technologies like YOLO, CNNs, IoT, GANs, and reinforcement learning for real-time parking solutions. Discussed challenges such as scalability, privacy, and computational constraints, with proposed directions involving federated learning and edge AI.",
      image: require("./assets/images/Publication_logo.png"),
      imageAlt: "Publication Icon",
      footerLink: [
        {
          name: "Journal Link",
          url: "https://example.com/journal-link"
        }
      ]
    },
    {
      title: "Microsoft-Coursera: Python Programming Fundamentals",
      subtitle:
        "Successfully completed the official certification course offered by Microsoft on Coursera. Covered Python programming basics including variables, data types, control flow, functions, and debugging techniques. Built a strong foundation for software development and data science applications.",
      image: require("./assets/images/Microsoft_logo.png"), // Add an appropriate logo image
      imageAlt: "Certification Icon",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/85815ac8037d12db1a4fc01862946a22"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "False", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: "stsharath13@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
