function About() {
  return (
    <section className="about" id="about">

      <div className="section-heading">
        <p className="section-label">ABOUT ME</p>

        <h2>
          A little about <span>who I am.</span>
        </h2>
      </div>


      <div className="about-content">

        <div className="about-text">

          <p>
            I'm <strong>John Carlo Enriquez</strong>, a BSIT student
            and aspiring developer who enjoys building applications,
            learning new technologies, and turning ideas into useful
            digital solutions.
          </p>

          <p>
            My journey in IT has allowed me to work with web
            development, mobile applications, databases, and
            emerging technologies.
          </p>

          <p>
            I'm continuously improving my programming skills and
            looking for opportunities to grow as a developer.
          </p>

        </div>


        <div className="about-cards">

          <div className="about-card">
            <div className="about-card-icon">🎓</div>

            <h3>BSIT Student</h3>

            <p>
              Information Technology
            </p>
          </div>


          <div className="about-card">
            <div className="about-card-icon">💻</div>

            <h3>Aspiring Developer</h3>

            <p>
              Building & learning
            </p>
          </div>


          <div className="about-card">
            <div className="about-card-icon">🚀</div>

            <h3>Always Learning</h3>

            <p>
              Improving my skills
            </p>
          </div>


          <div className="about-card">
            <div className="about-card-icon">💡</div>

            <h3>Problem Solver</h3>

            <p>
              Turning ideas into solutions
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;