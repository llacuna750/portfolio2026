function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> PORTFOLIO · 2026</p>
        <h1 id="hero-title">
          Hi, I’m <span className="accent-text">Gabriel Llacuna.</span>
          <br />I’m studying IT,
          <br />learning as I go.
        </h1>
        <p className="hero-description">
          I’m exploring networking and programming, building my understanding
          step by step as I prepare for an internship or entry-level role.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#about">
            See what I’m learning <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="hero-art" aria-label="A decorative card showing the portfolio technology">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-card">
          <div className="code-card-top"><span /><span /><span /><small>about-me.js</small></div>
          <pre aria-label="Code sample"><code><span className="code-purple">const</span> <span className="code-blue">creator</span> = {'{'}
  name: <span className="code-green">'Gabriel Llacuna'</span>,
  studying: [
    <span className="code-green">'Networking'</span>,
    <span className="code-green">'Programming'</span>,
  ],
  approach: <span className="code-green">'keep learning'</span>,
  goal: <span className="code-green">'gain experience'</span>,
{'}'}</code></pre>
          <div className="code-card-note"><span className="sparkle">✳</span> Built with curiosity</div>
        </div>
        <span className="art-label label-top">DESIGN WITH INTENTION</span>
        <span className="art-label label-bottom">CODE WITH CARE</span>
      </div>

      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}

export default Hero
