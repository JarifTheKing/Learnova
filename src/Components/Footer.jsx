import React from "react";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <NavLink>
          <nav className="grid grid-flow-col font-bold gap-4">
            <Link className="hover:text-emerald-700">About us</Link>
            <Link className="hover:text-emerald-700">Contact</Link>
            <Link className="hover:text-emerald-700">Press kit</Link>
          </nav>
        </NavLink>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/facebook-logo.png"
                alt="facebook-logo"
              />
            </Link>

            <Link>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/github-logo.png"
                alt="github-logo"
              />
            </Link>

            <Link>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/youtube-play.png"
                alt="youtube-play"
              />
            </Link>
          </div>
        </nav>
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
