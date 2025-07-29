// Centralized skills data for the entire application
// This eliminates duplication between SkillsSimple and SkillsOrb components

export const SKILLS_DATA = [
  // Frontend Technologies
  {
    name: "HTML5",
    link: "Html.svg",
    icon: "Html.svg",
    level: 95,
    category: "frontend",
    description: "Semantic markup and modern web standards",
    color: "#e34f26",
    years: "3+",
  },
  {
    name: "CSS3",
    link: "CSS.svg",
    icon: "CSS.svg",
    level: 90,
    category: "frontend",
    description: "Advanced styling, animations, and responsive design",
    color: "#1572b6",
    years: "3+",
  },
  {
    name: "JavaScript",
    link: "JavaScript.svg",
    icon: "JavaScript.svg",
    level: 88,
    category: "frontend",
    description: "ES6+, DOM manipulation, and modern JS features",
    color: "#f7df1e",
    years: "3+",
  },
  {
    name: "React",
    link: "REACT.svg",
    icon: "REACT.svg",
    level: 85,
    category: "frontend",
    description: "Component-based UI development with hooks",
    color: "#61dafb",
    years: "2+",
  },
  {
    name: "Redux",
    link: "REDUX.svg",
    icon: "REDUX.svg",
    level: 80,
    category: "frontend",
    description: "State management for complex applications",
    color: "#764abc",
    years: "1.5+",
  },
  {
    name: "Tailwind CSS",
    link: "TAILWINDCSS.svg",
    icon: "TAILWINDCSS.svg",
    level: 85,
    category: "frontend",
    description: "Utility-first CSS framework",
    color: "#06b6d4",
    years: "2+",
  },
  {
    name: "Material-UI",
    link: "MUI.svg",
    icon: "MUI.svg",
    level: 78,
    category: "frontend",
    description: "React component library with Material Design",
    color: "#007fff",
    years: "1+",
  },
  {
    name: "Bootstrap",
    link: "BOOTSTRAP.svg",
    icon: "BOOTSTRAP.svg",
    level: 75,
    category: "frontend",
    description: "Responsive CSS framework",
    color: "#7952b3",
    years: "2+",
  },

  // Backend Technologies
  {
    name: "Node.js",
    link: "Node-js.svg",
    icon: "Node-js.svg",
    level: 82,
    category: "backend",
    description: "Server-side JavaScript runtime",
    color: "#339933",
    years: "2+",
  },
  {
    name: "Express.js",
    link: "Express.svg",
    icon: "Express.svg",
    level: 80,
    category: "backend",
    description: "Web application framework for Node.js",
    color: "#000000",
    years: "2+",
  },
  {
    name: "MongoDB",
    link: "MongoDB.svg",
    icon: "MongoDB.svg",
    level: 85,
    category: "backend",
    description: "NoSQL database for modern applications",
    color: "#47a248",
    years: "2+",
  },
  {
    name: "Mongoose",
    link: "Mongoose.svg",
    icon: "Mongoose.svg",
    level: 78,
    category: "backend",
    description: "MongoDB object modeling for Node.js",
    color: "#880000",
    years: "2+",
  },
  {
    name: "SQL",
    link: "SQL.svg",
    icon: "SQL.svg",
    level: 80,
    category: "backend",
    description: "Relational database management",
    color: "#336791",
    years: "2+",
  },
  {
    name: "C",
    link: "C.svg",
    icon: "C.svg",
    level: 88,
    category: "backend",
    description: "System programming and algorithms",
    color: "#a8b9cc",
    years: "3+",
  },
  {
    name: "C++",
    link: "C++.svg",
    icon: "C++.svg",
    level: 85,
    category: "backend",
    description: "Object-oriented programming and DSA",
    color: "#00599c",
    years: "3+",
  },
  {
    name: "Python",
    link: "PYTHON.svg",
    icon: "PYTHON.svg",
    level: 82,
    category: "backend",
    description: "Versatile programming for web and data",
    color: "#3776ab",
    years: "2+",
  },

  // Data Science & Analytics
  {
    name: "Pandas",
    link: "PANDAS.svg",
    icon: "PANDAS.svg",
    level: 75,
    category: "data",
    description: "Data manipulation and analysis library",
    color: "#150458",
    years: "1+",
  },
  {
    name: "Power BI",
    link: "POWERBI.svg",
    icon: "POWERBI.svg",
    level: 70,
    category: "data",
    description: "Business intelligence and data visualization",
    color: "#f2c811",
    years: "1+",
  },

  // Computer Science Fundamentals
  {
    name: "DSA",
    link: "DSA.svg",
    icon: "DSA.svg",
    level: 85,
    category: "fundamentals",
    description: "Data Structures and Algorithms",
    color: "#ff6b6b",
    years: "3+",
  },
];

// Enhanced categories with better organization
export const CATEGORIES = {
  all: SKILLS_DATA,
  frontend: SKILLS_DATA.filter((skill) => skill.category === "frontend"),
  backend: SKILLS_DATA.filter((skill) => skill.category === "backend"),
  data: SKILLS_DATA.filter((skill) => skill.category === "data"),
  fundamentals: SKILLS_DATA.filter((skill) => skill.category === "fundamentals"),
};

// Category metadata for enhanced display
export const CATEGORY_INFO = {
  all: {
    title: "All Technologies",
    description: "Complete tech stack overview",
    icon: "🚀",
    gradient: "from-blue-600 to-purple-600"
  },
  frontend: {
    title: "Frontend Development",
    description: "User interface & experience",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500"
  },
  backend: {
    title: "Backend Development",
    description: "Server-side & databases",
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500"
  },
  data: {
    title: "Data Science",
    description: "Analytics & visualization",
    icon: "📊",
    gradient: "from-yellow-500 to-orange-500"
  },
  fundamentals: {
    title: "CS Fundamentals",
    description: "Core computer science",
    icon: "🧠",
    gradient: "from-indigo-500 to-purple-500"
  }
};
