import { Link } from 'react-router-dom'
import './ContentPage.css'
import './ContentPageHero.css'

function PlaceToStay() {
  return (
    <article className="content-page content-page--with-hero">
      <section className="content-hero">
        <div className="content-hero-image">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
            alt=""
          />
        </div>
        <div className="content-hero-content">
          <h1 className="content-hero-title">A Place to Stay</h1>
          <div className="content-divider content-divider--light" aria-hidden="true">⸻</div>
        </div>
      </section>

      <section className="content-section content-section--white">
        <div className="content-section-inner content-section-inner--wide">
          <p className="content-body">
            Amicus is not a resort or a retreat center.
            It is a privately hosted place to stay while you are here — designed to support
            clarity, ease, and thoughtful living.
          </p>
          <p className="content-body">
            Everything unnecessary has been removed.
            What remains has been considered.
          </p>
        </div>
      </section>

      <section className="content-section content-section--cream">
        <div className="content-section-inner content-section-inner--split">
          <div className="content-section-image">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt=""
            />
          </div>
          <div className="content-section-text">
            <h2 className="content-subtitle">An Invitation</h2>
            <div className="content-divider" aria-hidden="true">⸻</div>
            <p className="content-body">
              Amicus is stewarded carefully and shared selectively.
              If this vision resonates with you,
              we'd welcome a conversation.
            </p>
            <p className="content-body">
              Not about logistics.
              Not about availability.
              But about alignment —
              and whether Amicus is meant to be part of your story,
              even for a season.
            </p>
            <Link to="/#contact" className="content-cta">
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export default PlaceToStay
