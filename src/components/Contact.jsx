import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-wrapper">

        <img
          src="/images/Shivani.jpg"
          alt="Shivani"
          className="contact-image"
        />

        <div className="contact-info">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Something Amazing
          </h2>

          <p>
            Open to QA Automation,
            Playwright, API Testing,
            SDET and Quality Engineering roles.
          </p>

          <div className="social-links">

            <a
              href="mailto:shivanimoorthy5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>

            <a href="tel:+916383643070">
              <FaPhoneAlt />
            </a>

            <a
              href="https://www.linkedin.com/in/shivani-narayanan-a168963a9/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ShivaniNarayanan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

          <div className="contact-cta">

            <a
              href="/Shivani_Narayanan_QA_Automation.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;