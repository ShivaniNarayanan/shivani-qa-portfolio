import CountUp from "react-countup";

export default function Stats() {

  return (

    <section className="stats">

      <div className="stat">

        <h2>
          <CountUp end={4.9} duration={3} />
        </h2>

        <p>Years Experience</p>

      </div>

      <div className="stat">

        <h2>
          <CountUp end={20} duration={3} />
        </h2>

        <p>Projects</p>

      </div>

      <div className="stat">

        <h2>
          <CountUp end={100} duration={3} />
        </h2>

        <p>Automation Tests</p>

      </div>

    </section>

  );

}