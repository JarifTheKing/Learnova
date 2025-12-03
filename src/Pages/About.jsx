import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLaptopCode,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <Container>
      <div className="min-h-screen py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-emerald-600">
            About <span className="fontStyle text-5xl">Learnova</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A modern platform created to make learning simple, interactive, and
            accessible for everyone.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 mb-10 border-l-4 border-emerald-500"
        >
          <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
            <FaBullseye /> Our Mission
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our mission is to simplify the learning experience by delivering
            clean, intuitive, and organized educational tools. Learnova empowers
            students with a responsive interface, structured content, and
            seamless access to essential resources.
          </p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-emerald-50 rounded-2xl p-8 shadow-md mb-10"
        >
          <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
            <FaLaptopCode /> What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-200">
              <h3 className="font-semibold text-lg text-gray-800">
                User Profiles & Personalization
              </h3>
              <p className="text-gray-600 mt-2">
                Manage your profile, track progress, and access your learning
                tools with ease.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Secure Authentication
              </h3>
              <p className="text-gray-600 mt-2">
                Experience safe login and registration using Firebase
                Authentication.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Responsive Interface
              </h3>
              <p className="text-gray-600 mt-2">
                Access Learnova seamlessly on desktop, tablet, or mobile
                devices.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm border border-emerald-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Clean Modern UI
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy a minimalist, structured, and distraction-free learning
                environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 mb-10 border-r-4 border-emerald-500"
        >
          <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
            <FaUsers /> Our Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Learnova aims to build a learning environment where technology
            supports every student’s curiosity, confidence, and academic
            journey. Our vision is to make learning accessible, reliable, and
            enjoyable for everyone.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-emerald-50 rounded-2xl p-8 shadow-md mb-10"
        >
          <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
            <FaCheckCircle /> Why Choose Learnova?
          </h2>
          <ul className="list-disc mt-4 ml-6 text-gray-700 space-y-2">
            <li>Clean and modern UI</li>
            <li>Fully responsive design</li>
            <li>Secure and reliable authentication</li>
            <li>Focused on real-world student needs</li>
            <li>Built with modern technologies</li>
          </ul>
        </motion.div>

        {/* Developer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 mb-10 border-t-4 border-emerald-500"
        >
          <h2 className="text-2xl font-bold text-emerald-600">
            Meet the Developer
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Learnova is developed by{" "}
            <a
              href="https://github.com/JarifTheKing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:underline"
            >
              Mahfuz Billah
            </a>
            , a passionate Fullstack Developer dedicated to building fast,
            modern, and user-friendly web applications. This project reflects
            real-world development principles, clean coding practices, and a
            strong commitment to learning and innovation.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
