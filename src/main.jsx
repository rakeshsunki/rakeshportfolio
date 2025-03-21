import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/Aboutme.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Endpage from "./components/Contacts&Hobbies/Endpage.jsx";
const route = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutMe /> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contacts", element: <Endpage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </StrictMode>
);
