import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Based in the vibrant city of Johannesburg, South Africa, I am an ardent full-stack developer with a profound passion for front-end technologies. My journey in development is a quest for the perfect synergy between form and function, where aesthetics meet seamless performance. Over the past five years, I've dedicated myself to mastering the craft of creating visually stunning and responsive web applications with tools like React and Next.js. While I possess robust back-end skills in Node.js, Express.js, and MongoDB, my true calling lies in the front-end realm, where I transform complex concepts into intuitive and engaging user interfaces. My mission is to craft innovative solutions that transcend mere functionality, driving business growth and enriching the human experience through exceptional design and elegance.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a profound passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have navigated a diverse array of technologies, including React.js, Next.js, Node.js, Express.js, and MongoDB. My journey in web development began with a deep curiosity about how things work, evolving into a career defined by a relentless pursuit of knowledge and adaptability to new challenges. Thriving in collaborative environments, I find immense satisfaction in solving complex problems and delivering high-quality solutions. Beyond the realm of coding, I maintain an active lifestyle, whether by hitting the gym or embarking on a hike. My enthusiasm for exploration extends to the latest AI tools and technologies, and I channel my creativity into the kitchen, where I embrace my role as my own master chef.`;

export const categories = [
  {
    title: "Front-End",
    skills: [ "Material UI", "Tailwind", "Bootstrap"]
  },
  {
    title: "Back-End",
    skills: ["FastAPI", "Python", "Java"]
  },
  {
    title: "Databases",
    skills: [ "MySQL", "SQLite", "SQL Server"]
  },
  {
    title: "Other",
    skills: [ "Webpack",  "AWS", "Docker"]
  }
];

export const EXPERIENCES = [
  {
    year: "October 2023 - Present",
    role: "Senior Front-end Engineer",
    company: "Rentoza",
    description: `As a Senior Frontend Engineer at Rentoza, I oversaw the creation of sophisticated e-commerce applications in React, TypeScript, and Next.js. I streamlined processes, guided, and trained juniors, and integrated Amazon Web Services (AWS) and BigQuery to improve project scalability. My key contributions include automating product database transfers and pioneering thorough cross-platform testing and validation. Working with UX designers using Figma, I ensured high-quality, user-centric interfaces. Notably, I oversaw the introduction of a new storefront, designing its architecture and guiding the team to meet tight constraints, demonstrating my leadership and technical expertise.`,
    technologies: [
      "React",
      "TypeScript",
      "Shopify",
      "AWS",
      "GCP"
    ],
  },
  {
    year: "March 2019 - October 2023",
    role: "Full-stack Developer",
    company: "FuellTech Systems",
    description: `At FuellTech Systems, I was trusted to create/design new web interfaces, layouts, and site designs for a variety of clients in addition to transforming legacy code into reusable code components. I've also built websites, portals, and large-scale web applications for both complex and simple projects, demonstrating the technology we employ to customers. I've also created demo websites for new clients. I worked on projects that required API interaction with various providers, cloud computing and automation, cloud programs and functionalities, and back-end integration. One of my tasks was to ensure the quality of produced websites, including the validation of pages and links.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "API",
      "Cloud Computing"
    ],
  },
  {
    year: "November 2018 - April 2019",
    role: "Technical Consultant",
    company: "Zevoli Consulting",
    description: `During my time at Zevoli, I've provided technical advice and assistance to the team working on their latest development project (OneLinkage). I helped compile numerous deliverables while also overseeing the explanation of the software environment, its components, and structure to non-technical team members so that they could comprehend its potential.`,
    technologies: [
      "Technical Consulting",
      "Jira",
      "Python",
      "AWS"
    ],
  },
  {
    year: "November 2018 - December 2018",
    role: "Data Capturer",
    company: "Department of Education",
    description: `Whilst employed here; I was tasked with the responsibility of capturing and classifying all the results and raw data for the matric examinations. During this time, I developed a proficiency in Microsoft Office and further developed my quality testing, creative problem solving and adaptability skills.`,
    technologies: [
      "Microsoft Office",
      "Data Entry",
      "Quality Testing",
      "Creative Problem Solving"
    ],
  }
];


export const PROJECTS = [
 {
  title: "E-Commerce Website",
  image: project1,
  description:
   "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  technologies: [
   "HTML",
   "CSS",
   "React",
   "Node.js",
   "MongoDB",
  ],
 },
 {
  title: "Task Management App",
  image: project2,
  description:
   "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  technologies: [
   "HTML",
   "CSS",
   "Angular",
   "Firebase",
  ],
 },
 {
  title: "Portfolio Website",
  image: project3,
  description:
   "A personal portfolio website showcasing projects, skills, and contact information.",
  technologies: [
   "HTML",
   "CSS",
   "React",
   "Bootstrap",
  ],
 },
 {
  title: "Blogging Platform",
  image: project4,
  description:
   "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  technologies: [
   "HTML",
   "CSS",
   "Next.js",
   "Express",
   "mySQL",
  ],
 },
];

export const CONTACT = {
 address: "5 Amandel Street, Johannesburg, Gauteng, South Africa",
 phoneNo: "(+27)79 933 2336 ",
 email: "sims.kubeka96@gmail.com",
};
