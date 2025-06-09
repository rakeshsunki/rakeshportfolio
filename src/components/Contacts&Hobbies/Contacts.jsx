import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { IoPerson, IoCall, IoLocation, IoCheckmarkCircle, IoWarning } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSentMessage("");

    const templateData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await emailjs.send(
        "service_a5rlsbk",
        "template_usae4nb",
        templateData,
        "EOFl0dosGt-Cw-Yc4"
      );

      console.log("Email Sent:", response);
      setSentMessage("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setSentMessage("error");
    }
    setIsSending(false);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="p-6 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
        <p className="text-blue-200 mt-1">I'd love to hear from you!</p>
      </div>
      
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.form 
          className="space-y-5" 
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-300" htmlFor="name">Your Name</label>
            <motion.div 
              className="flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all"
              whileFocus={{ scale: 1.02 }}
            >
              <IoPerson className="text-blue-400" size={20} />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-300" htmlFor="email">Email Address</label>
            <motion.div 
              className="flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all"
              whileFocus={{ scale: 1.02 }}
            >
              <FaAt className="text-blue-400" size={18} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-300" htmlFor="message">Message</label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[120px] px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-70"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isSending ? "Sending..." : "Send Message"}{" "}
            <RiSendPlaneFill className={`text-lg ${isSending ? "animate-ping" : ""}`} />
          </motion.button>

          {sentMessage && (
            <motion.div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                sentMessage === "success"
                  ? "bg-green-900/30 text-green-300 border border-green-500/30"
                  : "bg-red-900/30 text-red-300 border border-red-500/30"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {sentMessage === "success" ? (
                <>
                  <IoCheckmarkCircle className="text-green-400 text-lg flex-shrink-0" />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <IoWarning className="text-red-400 text-lg flex-shrink-0" />
                  <span>Failed to send message. Please try again.</span>
                </>
              )}
            </motion.div>
          )}
        </motion.form>

        <motion.div 
          className="space-y-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium text-blue-300 mb-4">Connect With Me</h3>
          
          <motion.a
            href="https://github.com/rakeshsunki?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-3.5 bg-white/5 rounded-lg border border-white/10 hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.03, x: 5 }}
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <FaGithub className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">GitHub</h4>
              <p className="text-sm text-gray-400">Check out my repositories</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rakesh-sunki-7b7911357"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-3.5 bg-white/5 rounded-lg border border-white/10 hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.03, x: 5 }}
          >
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <FaLinkedin className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">LinkedIn</h4>
              <p className="text-sm text-gray-400">Connect with me professionally</p>
            </div>
          </motion.a>

          <motion.div
            className="flex items-center gap-4 px-5 py-3.5 bg-white/5 rounded-lg border border-white/10"
            whileHover={{ scale: 1.03, x: 5 }}
          >
            <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
              <IoCall className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">Phone</h4>
              <p className="text-gray-300">9390575724</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 px-5 py-3.5 bg-white/5 rounded-lg border border-white/10"
            whileHover={{ scale: 1.03, x: 5 }}
          >
            <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center">
              <IoLocation className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">Location</h4>
              <p className="text-gray-300">Siddipet, Telangana</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
