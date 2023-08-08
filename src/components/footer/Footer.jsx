import React from "react";
import styles from "./footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.company}>
          <h4>Company</h4>

          <li>Innovations</li>
          <li>Services</li>
          <li>Lejhro Recruiter</li>
          <li>About</li>
          <li>Blogs</li>
        </div>
        <div className={styles.prog}>
          <h4>Programs</h4>

          <li>Lejhro Bootcamp</li>
        </div>
        <div className={styles.contact}>
          <h4>Support</h4>

          <li>Contact</li>
          <li>Terms of Use</li>
          <li>Privacy Statement</li>
        </div>
        <div className={styles.support}>
          <h4>Connect with us</h4>
          <div className={styles.iconList}>
            <li>
              <TwitterIcon className={styles.icon} />
            </li>
            <li>
              <FacebookIcon className={styles.icon} />
            </li>
            <li>
              <LinkedInIcon className={styles.icon} />
            </li>
            <li>
              <YouTubeIcon className={styles.icon} />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
