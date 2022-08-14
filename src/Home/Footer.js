import React from "react";
import "./profile.css";

function Footer() {
  return (
    <div className="footer">
      <div className="coding-links">
        <span>Coding Links</span>
        <li>
          <a href="https://github.com/adityadixit07">Github</a>
        </li>
        <li>
          <a href="https://leetcode.com/adityadixit/">Leetcode</a>
        </li>
        <li>
          <a href="#">GFG Profile</a>
        </li>
      </div>
      <div className="social-links">
        <span>Social links</span>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Reddit</a>
        </li>
        <li>
          <a href="#">StackOverFlow</a>
        </li>
      </div>
      <div className="address">
        <span>Address</span>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.35623226811!2d80.26834223883421!3d26.447310330839223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1657505899791!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <p>Kalyanpur Kanpur</p>
      </div>
    </div>
    

  );
}

export default Footer;
