const skills = ['Networking', 'Programming', 'React', 'JavaScript', 'CSS']

function About() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
      <div className="about-grid">
        <h2 className="section-title" id="about-title">Learning the foundations.<br /><span>Growing through practice.</span></h2>
        <div className="about-copy">
          <p>
            I’m <strong>Gabriel Llacuna</strong>, currently studying IT.
            I’m especially interested in networking and programming, and I’m
            building my knowledge one concept at a time.
          </p>
          <p>
            I’m not an expert yet, but I’m eager to understand more, practice
            what I learn, and grow through hands-on experience. My goal is to
            prepare for an internship or entry-level job in IT.
          </p>
          <div className="skill-list" aria-label="Areas I’m currently learning">
            {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
