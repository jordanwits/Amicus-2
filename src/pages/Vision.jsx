import { Link } from 'react-router-dom'
import './ContentPage.css'
import './ContentPageHero.css'

function Vision() {
  return (
    <article className="content-page content-page--with-hero">
      <section className="content-hero">
        <div className="content-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt=""
          />
        </div>
        <div className="content-hero-content">
          <h1 className="content-hero-title">The Vision</h1>
          <div className="content-divider content-divider--light" aria-hidden="true">⸻</div>
        </div>
      </section>

      <section className="content-section content-section--white">
        <div className="content-section-inner content-section-inner--wide">
          <p className="content-body">
            Amicus is a privately stewarded place, created for people who value
            thoughtfulness, discretion, and environments shaped with care.
            It exists for those who recognize that excellence is felt more than announced —
            and that the most meaningful experiences are often the most quietly composed.
          </p>
          <p className="content-body">
            Here, beauty is intentional.
            Hospitality is unhurried.
            Presence is allowed to settle without instruction.
          </p>
          <p className="content-body">
            Amicus is not designed for scale or spectacle.
            It is shaped for alignment.
          </p>
        </div>
      </section>

      <section className="content-section content-section--image-only">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
          alt=""
        />
      </section>
      <section className="content-section content-section--cream">
        <div className="content-section-inner content-section-inner--wide">
          <p className="content-body">
            We invite you to consider whether Amicus is meant to be part of your story,
            even for a season.
          </p>
          <Link to="/#contact" className="content-cta">Begin a conversation</Link>
        </div>
      </section>
    </article>
  )
}

export default Vision
