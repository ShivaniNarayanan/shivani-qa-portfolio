const Skills = () => {
  const skills = [
    { name: "Playwright", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "Selenium", percentage: 92 },
    { name: "Python", percentage: 92 },
    { name: "API Testing", percentage: 90 },
    { name: "Postman", percentage: 92 },
    { name: "SQL", percentage: 85 },
    { name: "GitHub Actions", percentage: 80 },
    { name: "CI/CD", percentage: 90 },
    { name: "Jenkins", percentage: 80 },
    { name: "Agile Scrum", percentage: 95 }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="section-header">
        <span>SKILLS</span>
        <h2>Technical Expertise</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-top">
              <h3>{skill.name}</h3>
              <span>{skill.percentage}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;