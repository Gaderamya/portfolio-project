import React, { useState, useEffect, useRef } from "react";
import Contactimg1 from "../assets/Contactimg1.jpg";
import phoneringing from "../assets/phoneringing.mp3";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  // Play audio once on page load
  useEffect(() => {
    if (audioRef.current && !muted) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch(() => {});
    }
  }, [muted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src={phoneringing} />

      {/* Mute/Unmute Button */}
      <button
        onClick={() => setMuted(!muted)}
        className="fixed top-5 right-5 bg-teal-600 text-white px-4 py-2 rounded z-50"
      >
        {muted ? "Unmute" : "Mute"}
      </button>

      <section className="bg-gray-100 min-h-screen flex items-center justify-center h-[1000px]">
        <div className="flex flex-col md:flex-row gap-20 items-center mt-[100px]">
          {/* Form Section */}
          <div className="bg-[#e9ddc3] rounded-[24px] shadow-lg p-4 w-[496px] flex flex-col gap-4">
            <h2 className="text-[36px] leading-[54px] font-bold font-poppins text-center text-[#27677D]">
              Get In Touch
            </h2>

            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
              {/* Full Name */}
              <label className="text-gray-700 font-medium">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`bg-white rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}

              {/* Email */}
              <label className="text-gray-700 font-medium">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-white rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}

              {/* Subject */}
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Subject"
              />

              {/* Message */}
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Your message"
                rows="4"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 bg-teal-700 text-white font-semibold py-3 rounded-[24px] shadow hover:bg-teal-800 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Circular Image */}
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-lg flex items-center justify-center border-4 border-[#e9ddc3]">
            <img
              src={Contactimg1}
              alt="Contact person"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
