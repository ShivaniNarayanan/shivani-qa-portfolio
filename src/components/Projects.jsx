export default function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="project-title">
        Featured Projects
      </h2>

      <div className="project-grid">

        <div className="project-card">
          <img
            src="/images/project-ticket.png"
            alt="Ticket Booking Framework"
          />

          <div className="project-content">
            <h3>Playwright Ticket Booking Automation</h3>

            <p>
              End-to-End Ticket Booking Framework using
              Playwright, JavaScript, API Testing,
              POM Architecture and GitHub Actions.
            </p>

            <div className="tags">
              <span>Playwright</span>
              <span>JavaScript</span>
              <span>API</span>
              <span>POM</span>
            </div>

            <a
              href="https://github.com/ShivaniNarayanan/playwright-ticket-booking-automation"
              target="_blank"
            >
              View GitHub →
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="/images/project-ecommerce.png"
            alt="Ecommerce Framework"
          />

          <div className="project-content">
            <h3>Playwright Ecommerce Automation</h3>

            <p>
              Ecommerce Automation Framework with Login,
              Product Search, Cart, Checkout,
              SQL Validation and CI/CD.
            </p>

            <div className="tags">
              <span>Playwright</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>CI/CD</span>
            </div>

            <a
              href="https://github.com/ShivaniNarayanan/playwright-ecommerce-Automation"
              target="_blank"
            >
              View GitHub →
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}