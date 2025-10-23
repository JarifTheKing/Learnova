import React from "react";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center shadow-lg bg-emerald-100 text-base-content rounded p-10">
        <ul className="grid grid-flow-col font-bold gap-4">
          <Link to="/" target="_blank" className="hover:text-emerald-700">
            About us
          </Link>
          <Link to="/" className="hover:text-emerald-700">
            Contact
          </Link>
          <Link to="/" className="hover:text-emerald-700">
            Press kit
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

          <Link to="https://www.youtube.com/shorts/4xwsJvUc9Rg" target="_blank">
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
  );
};

export default Footer;
