export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Shivani Narayanan
      </div>

      <ul className="nav-links">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <a
        href="/Shivani_Narayanan_QA_Automation.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-nav-btn"
      >
        Resume
      </a>


    </nav>
  );
}