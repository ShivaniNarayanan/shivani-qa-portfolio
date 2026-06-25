const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <img
          src="/images/office-traditional.jpg"
          alt="Shivani Narayanan"
          className="hero-image"
        />
      </div>

      <div className="hero-right">

        <span className="hero-tag">
          QA AUTOMATION ENGINEER
        </span>

        <h1 className="hero-title">
          Shivani
          <span> Narayanan</span>
        </h1>

        <h2 className="hero-subtitle">
          Senior Analyst @ Wipro
        </h2>

        <p className="hero-description">
          QA Automation Engineer with 4.9+ years of experience in
          Software Testing, including Manual Testing,
          Playwright Automation, API Testing,
          SQL Validation and CI/CD implementation.
        </p>

        <div className="hero-tech-stack">
          <span>Playwright</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Selenium</span>
          <span>API Testing</span>
          <span>Python</span>
          <span>SQL</span>
          <span>BDD Cucumber</span>
          <span>GitHub Actions</span>
        </div>

        <div className="hero-buttons">

          <a
            href="/Shivani_Narayanan_QA_Automation.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn-secondary"
          >
            View Projects
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h3>4.9+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>2+</h3>
            <p>Years Playwright</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;