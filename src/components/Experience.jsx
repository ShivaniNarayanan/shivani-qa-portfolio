const Experience = () => {
  return (
    <section className="experience-section" id="experience">

      <div className="section-header">
        <span>EXPERIENCE</span>
        <h2>Professional Journey</h2>
      </div>

      <div className="experience-container">

        <div className="experience-image-wrapper">
          <img
            src="/images/laptop-work.jpg"
            alt="Work Experience"
            className="experience-image"
          />
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                2021 - Present
              </span>

              <h3>
                Senior Analyst
              </h3>

              <h4>
                Wipro Limited
              </h4>

              <p>
                Working on Healthcare domain applications,
                Playwright Automation, API Testing and SQL Validation.
              </p>

              <ul>

                <li>
                  Developed scalable Playwright Automation Frameworks
                  using TypeScript and Page Object Model.
                </li>

                <li>
                  Performed API Testing using Postman and backend
                  validation using SQL queries.
                </li>

                <li>
                  Executed Functional, Regression, Smoke and
                  End-to-End Testing.
                </li>

                <li>
                  Integrated automation execution with CI/CD pipelines.
                </li>

                <li>
                  Collaborated with Agile teams and participated in
                  Sprint Planning, Grooming and Release Validation.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;