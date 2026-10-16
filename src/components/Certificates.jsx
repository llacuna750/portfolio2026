const certificates = [
  {
    title: 'Introduction to HTML',
    provider: 'SoloLearn',
    symbol: '<>',
    color: 'certificate-peach',
    url: 'https://www.sololearn.com/en/certificates/CC-LXZ3PTWZ',
  },
  {
    title: 'Introduction to CSS',
    provider: 'SoloLearn',
    symbol: '#',
    color: 'certificate-lilac',
    url: 'https://www.sololearn.com/certificates/CC-Y4RUSTTH',
  },
  {
    title: 'Introduction to Java',
    provider: 'SoloLearn',
    symbol: 'J',
    color: 'certificate-blue',
    url: 'https://www.sololearn.com/en/certificates/CC-WH6NXDX5',
  },
  {
    title: 'Introduction to JavaScript',
    provider: 'SoloLearn',
    symbol: 'JS',
    color: 'certificate-yellow',
    url: 'https://www.sololearn.com/en/certificates/CC-ZP0LA5TU',
  },
  {
    title: 'JavaScript Intermediate',
    provider: 'SoloLearn',
    symbol: 'JS',
    color: 'certificate-mint',
    url: 'https://www.sololearn.com/certificates/CC-F6HWAJFZ',
  },
  {
    title: 'Java Intermediate',
    provider: 'SoloLearn',
    symbol: 'J',
    color: 'certificate-blue',
    url: 'https://www.sololearn.com/certificates/CC-WJD14OUO',
  },
  {
    title: 'JavaScript Fundamentals',
    provider: 'Coddy',
    symbol: 'JS',
    color: 'certificate-lilac',
    url: 'https://coddy.tech/certifications/CtLK6K-javascript-Bi8cmJ',
  },
  {
    title: 'JavaScript Logic & Flow',
    provider: 'Coddy',
    symbol: '{ }',
    color: 'certificate-peach',
    url: 'https://coddy.tech/certifications/CtLK6K-javascript-pIPeoH',
  },
]

function Certificates() {
  return (
    <section className="certificates-section" id="certificates" aria-labelledby="certificates-title">
      <div className="section-wrap">
        <div className="section-kicker"><span>02</span> COURSES & CERTIFICATES</div>
        <div className="certificates-heading">
          <h2 className="section-title" id="certificates-title">Learning, one step <span>at a time.</span></h2>
          <p>Courses I’ve completed as I grow my programming foundation.</p>
        </div>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <a
              className="certificate-card"
              href={certificate.url}
              key={certificate.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${certificate.title} certificate from ${certificate.provider}`}
            >
              <div className={`certificate-art ${certificate.color}`} aria-hidden="true">
                <span className="certificate-provider">{certificate.provider}</span>
                <span className="certificate-symbol">{certificate.symbol}</span>
                <span className="certificate-seal">CERTIFICATE</span>
              </div>
              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <span className="certificate-link">View certificate <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
