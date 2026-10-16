function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Gabriel Llacuna, home">
        GL<span>.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#certificates">Certificates</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
