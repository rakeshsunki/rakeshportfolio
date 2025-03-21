import { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoPerson, IoCall, IoLocation } from "react-icons/io5";
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
      time: new Date().toLocaleString(), // Add the missing time field
    };

    try {
      const response = await emailjs.send(
        "service_a5rlsbk",
        "template_usae4nb",
        templateData,
        "EOFl0dosGt-Cw-Yc4"
      );

      console.log("Email Sent:", response);
      setSentMessage("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Email send error:", error);
      setSentMessage("❌ Failed to send message. Try again.");
    }
    setIsSending(false);
  };

  return (
    <div
      className="bg-white p-5 rounded-lg max-w-2xl mx-auto flex flex-row gap-6"
      style={{ boxShadow: "5px 5px 5px gray", border: "1px solid gray" }}
    >
      <form className="flex flex-col gap-4 w-1/2" onSubmit={sendEmail}>
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg">
          <IoPerson className="text-gray-500" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg">
          <FaAt className="text-gray-500" size={20} />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 outline-none text-gray-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-600 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-lg outline-none text-gray-700 h-24"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          {isSending ? "Sending..." : "Send"}{" "}
          <RiSendPlaneFill className="inline" />
        </button>

        {sentMessage && (
          <p
            className={
              sentMessage.startsWith("✅") ? "text-green-600" : "text-red-600"
            }
          >
            {sentMessage}
          </p>
        )}
      </form>

      <div className="flex flex-col gap-4 w-1/2 text-gray-700">
        <div className="flex items-center justify-center gap-2 rounded-[10px] hover:bg-blue-500 hover:text-white border-1">
          <FaGithub className="text-gray-600" />
          <span>GitHub</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[10px] hover:bg-blue-500 hover:text-white border-1">
          <FaLinkedin className="text-blue-600" />
          <span>LinkedIn</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[10px] hover:bg-blue-500 hover:text-white border-1">
          <IoCall className="text-green-600" />
          <span>9390575724</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[10px] hover:bg-blue-500 hover:text-white border-1">
          <IoLocation className="text-red-600" />
          <span>Siddipet, Telangana</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
