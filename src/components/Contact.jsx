function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="section-kicker"><span>04</span> WHAT’S NEXT?</div>
      <div className="contact-panel">
        <div>
          <p className="contact-overline">PREPARING FOR AN INTERNSHIP OR ENTRY-LEVEL ROLE</p>
          <h2 id="contact-title">Ready to learn,<br /><span>grow, and contribute.</span></h2>
        </div>
        <div className="contact-links">
          <a className="button button-light" href="mailto:llacuna750@gmail.com">
            llacuna750@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-social" href="https://github.com/llacuna750" target="_blank" rel="noreferrer">
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="contact-decoration" aria-hidden="true">✳</span>
      </div>
    </section>
  )
}

export default Contact
