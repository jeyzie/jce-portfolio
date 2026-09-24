import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaDiscord
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}

      <div className="hero-content">

        <p className="hero-greeting">
          <span>●</span> Hi, I'm
        </p>

        <h1>
          JOHN CARLO
          <br />
          <span>ENRIQUEZ</span>
        </h1>

        <p className="hero-role">
          BSIT Student&nbsp; | &nbsp;Aspiring Developer
        </p>

        <p className="hero-description">
          "I build, learn, and turn ideas
          <br />
          into reality."
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View My Projects →
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

        </div>


        {/* SOCIAL MEDIA */}

        <div className="social-links">

          <a
            href="#"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            aria-label="Email"
          >
            <FaGoogle />
          </a>

          <a
            href="#"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="hero-visual">

        {/* Purple background */}
        <div className="purple-shape"></div>


        {/* Profile photo */}
        <div className="hero-photo">
          <img
            src="/profile.png"
            alt="John Carlo Enriquez"
          />
        </div>


        {/* Code */}
        <div className="code-box">
          <span>while (alive) {"{"}</span>
          <br />
          <span>&nbsp;&nbsp;learn();</span>
          <br />
          <span>&nbsp;&nbsp;build();</span>
          <br />
          <span>&nbsp;&nbsp;improve();</span>
          <br />
          <span>{"}"}</span>
        </div>


        {/* Handwritten text */}
        <div className="handwriting">
          Good
          <br />
          Code
          <br />
          Better
          <br />
          Future
        </div>


        {/* Student card */}
        <div className="student-card">

          <small>A</small>

          <p>
            STUDENT
            <br />
            TODAY
            <br />
            A DEVELOPER
            <br />
            TOMORROW
          </p>

        </div>


        {/* Decorative lines */}
        <div className="purple-lines">
          ╱
          <br />
          ╱
          <br />
          ╱
        </div>

      </div>

    </section>
  );
}

export default Hero;