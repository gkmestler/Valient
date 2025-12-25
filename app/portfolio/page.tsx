import Image from 'next/image'

const portfolioCompanies = [
  {
    name: 'DIRTYGUT',
    logo: '/images/portfolio/DIRTYGUT_Logo_final.webp',
    className: 'logo-dirtygut',
    url: 'https://dirtygut.com',
  },
  {
    name: 'Junk University',
    logo: '/images/portfolio/Junk university logo.webp',
    className: 'logo-junkuniversity',
    url: 'https://www.junk-university.com/',
  },
  {
    name: 'Junk Teens',
    logo: '/images/portfolio/Junkteenslogo.png',
    className: 'logo-junkteens',
    url: 'https://junkteens.com',
  },
  {
    name: 'Ludus Pursuit',
    logo: '/images/portfolio/Luduspursuitlogo.jpg',
    className: 'logo-luduspursuit',
    url: 'https://luduspursuit.org',
  },
  {
    name: 'Rage Zone',
    logo: '/images/portfolio/Rage Zone logo.png',
    className: 'logo-ragezone',
    url: 'https://www.ragezone.us/',
  },
  {
    name: 'SneakerSoul',
    logo: '/images/portfolio/SneakerSoul_Blue_Logo.avif',
    className: 'logo-sneakersoul',
    url: 'https://sneakersoul.com/',
  },
  {
    name: 'Takkra',
    logo: '/images/portfolio/Takkra.jpeg',
    className: 'logo-takkra',
    url: 'https://takkra.es/',
  },
  {
    name: 'Truvit',
    logo: '/images/portfolio/truvit_logo.png',
    className: 'logo-truvit',
    url: 'https://www.linkedin.com/company/truvit/',
  },
  {
    name: 'Fluidify Systems',
    logo: '/images/portfolio/Fluidify Systems.png',
    className: 'logo-fluidify',
    url: 'https://fluidifysystems.com',
  },
]

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <main className="portfolio-main">
        <div className="container">
          <div className="portfolio-header">
            <h1>Our Operating Experience</h1>
            <p className="portfolio-subtext">
              Before launching Methodic, our team built and operated multiple ventures, generating $4M+ in cumulative annual revenue. These businesses were founded and operated by us, not acquired, so we understand the long hours, the personal sacrifices, and the deep sense of pride that comes from building a meaningful business over many years. That's why we approach every potential acquisition with respect and transparency.
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolioCompanies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`portfolio-card ${company.className}`}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={200}
                  className="portfolio-logo"
                />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
