import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Maliheh Zarei Chitgar. I am a entry level Full-Stack Developer. 
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/malihehpooyan/" target="black">
          <BsGithub />
        </a>
    
        <a href="https://www.linkedin.com/in/malihehzarei/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;