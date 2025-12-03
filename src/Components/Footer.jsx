import React from "react";
import { Link, NavLink } from "react-router";
import Container from "../Shared/Container";
import { FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="">
        <footer className="footer footer-horizontal footer-center shadow-lg bg-emerald-100 text-base-content rounded-t-3xl  p-6">
          <h2 className="btn btn-ghost text-xl lg:text-4xl font-bold text-emerald-500 fontStyle mb-2">
            <FaGraduationCap className="lg:text-4xl text-xl" /> LEARNOVA
          </h2>

          <ul className="grid grid-flow-col font-bold gap-4">
            <Link to="/about" className="hover:text-emerald-700">
              About us
            </Link>
            <Link to="/contact" className="hover:text-emerald-700">
              Contact
            </Link>
            <Link to="/support" className="hover:text-emerald-700">
              Support
            </Link>
          </ul>

          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/programmingHero" target="_blank">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/facebook-logo.png"
                alt="facebook-logo"
              />
            </Link>

            <Link to="https://github.com/dashboard" target="_blank">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/github-logo.png"
                alt="github-logo"
              />
            </Link>

            <Link
              to="https://www.youtube.com/shorts/4xwsJvUc9Rg"
              target="_blank"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/youtube-play.png"
                alt="youtube-play"
              />
            </Link>
          </div>

          <aside>
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-emerald-600">Learnova</span>. Your
              trusted platform for online learning.
            </p>
          </aside>
        </footer>
      </div>
    </Container>
  );
};

export default Footer;
