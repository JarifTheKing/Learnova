import React, { useState } from "react";
import toast from "react-hot-toast";
import Container from "../Shared/Container";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container>
      <div className="my-4">
        <div className="min-h-screen bg-[url('/Okeeew.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-3xl flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="relative w-full max-w-sm sm:max-w-md p-[3px] rounded-2xl animate-border border border-emerald-500 hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500">
            <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-500  tracking-wide">
                  Contact Me
                </h1>
                <p className="mt-1 text-sm sm:text-base opacity-90">
                  Fill out the form to send a message
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    className="textarea textarea-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
