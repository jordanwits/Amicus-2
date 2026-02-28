import { Link } from 'react-router-dom'
import './ContentPage.css'
import './ContentPageHero.css'

function Experience() {
  return (
    <article className="content-page content-page--with-hero">
      <section className="content-hero">
        <div className="content-hero-image">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"
            alt=""
          />
        </div>
        <div className="content-hero-content">
          <h1 className="content-hero-title">The Experience</h1>
          <div className="content-divider content-divider--light" aria-hidden="true">⸻</div>
        </div>
      </section>

      <section className="content-section content-section--white">
        <div className="content-section-inner content-section-inner--wide">
          <p className="content-body">
            At Amicus, experience is not programmed.
            It is composed.
          </p>
          <p className="content-body">
            Craftsmanship is assumed.
            Anticipation is felt.
            Atmosphere speaks softly.
            Discretion is honored.
            Presence leads.
          </p>
          <p className="content-body">
            This is hospitality practiced quietly.
          </p>
        </div>
      </section>

      <section className="content-section content-section--cream">
        <div className="content-section-inner content-section-inner--split">
          <div className="content-section-image">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt=""
            />
          </div>
          <div className="content-section-text">
            <p className="content-body">
              We do not offer activities in the conventional sense. What we offer is
              an environment shaped for clarity and thoughtful living. Dining, rest,
              conversation — each composed with care.
            </p>
            <Link to="/#contact" className="content-cta">Begin a conversation</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Experience
