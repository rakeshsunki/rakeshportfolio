import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/Aboutme.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Endpage from "./components/Contacts&Hobbies/Endpage.jsx";
import Layout from "./Layout.jsx"; // We'll create this next

// Create router with proper layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "about", element: <AboutMe /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "contacts", element: <Endpage /> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
