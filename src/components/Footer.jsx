import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  const Scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white">
            Made with <IoHeart className="text-red-600" /> By Rakesh Sunki
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <nav className="mt-4 md:mt-0 flex gap-6">
          <span
            onClick={() => {
              Scroll("About");
            }}
            className="footer-link"
          >
            About
          </span>
          <span
            onClick={() => {
              Scroll("projects");
            }}
            className="footer-link"
          >
            Projects
          </span>
          <span
            onClick={() => {
              Scroll("contact");
            }}
            className="footer-link"
          >
            Contact
          </span>
        </nav>

        {/* Right Side - Social Icons */}
        <div className="mt-4 md:mt-0 flex gap-4">
          <a
            href="https://github.com/rakeshsunki?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-sunki-7b7911357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
