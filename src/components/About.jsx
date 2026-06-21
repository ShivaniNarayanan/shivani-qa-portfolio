const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="section-header">
        <span>ABOUT ME</span>
        <h2>Professional Profile</h2>
      </div>

      <div className="about-container">

        <div className="about-image-wrapper">
          <img
            src="/images/saree-portrait.jpg"
            alt="Shivani Narayanan"
            className="about-image"
          />
        </div>

        <div className="about-content">

          <p>
            QA Automation Engineer with 4.9+ years of Software
            Testing experience including Manual Testing,
            Playwright Automation, API Testing and SQL Validation.
          </p>

          <p>
            Currently working as Senior Analyst at Wipro,
            contributing to Healthcare domain applications and
            enterprise-level testing solutions.
          </p>

          <p>
            Experienced in designing scalable Playwright
            automation frameworks using TypeScript,
            Page Object Model (POM), API Validation,
            Database Testing and CI/CD integrations.
          </p>

          <div className="achievement-grid">

            <div className="achievement-card">
              <h3>4.9+</h3>
              <p>Years Experience</p>
            </div>

            <div className="achievement-card">
              <h3>20+</h3>
              <p>Projects</p>
            </div>

            <div className="achievement-card">
              <h3>2+</h3>
              <p>Years Playwright</p>
            </div>

            <div className="achievement-card">
              <h3>100%</h3>
              <p>Agile Projects</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;