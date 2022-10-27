import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-400 mt-auto p-5 text-center space-x-5 text-2xl">
      <button>
        <a href="https://github.com/SamMarch">
          <FaGithub />
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/sam-march-b9689323a/">
          <FaLinkedinIn />
        </a>
      </button>
    </footer>
  );
}

export default Footer;
