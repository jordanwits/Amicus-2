import { Link } from 'react-router-dom'
import './Accommodations.css'

const rooms = [
  {
    id: 1,
    name: 'The Garden Room',
    description: 'A light-filled sanctuary with views of the grounds. Designed for clarity and ease, with thoughtful details throughout. King bed, marble bath, and a private terrace.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    features: ['King bed', 'Marble bath', 'Private terrace', 'Garden views'],
  },
  {
    id: 2,
    name: 'The Library Suite',
    description: 'A retreat for those who value quiet and presence. Shelved walls, a reading nook, and subdued elegance. Perfect for extended stays.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    features: ['King bed', 'Sitting room', 'Library', 'Fireplace'],
  },
  {
    id: 3,
    name: 'The Courtyard House',
    description: 'A private residence within the grounds. Full kitchen, living area, and enclosed courtyard. Ideal for families or small groups seeking complete discretion.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    features: ['2 bedrooms', 'Full kitchen', 'Private courtyard', 'Living room'],
  },
  {
    id: 4,
    name: 'The Tower Room',
    description: 'Elevated views and quiet seclusion. A single room shaped for reflection, with panoramic windows and minimal distraction.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    features: ['King bed', 'Panoramic views', 'En-suite bath', 'Writing desk'],
  },
]

function Accommodations() {
  return (
    <article className="accommodations-page">
      <section className="accommodations-hero">
        <div className="accommodations-hero-image">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
            alt=""
          />
        </div>
        <div className="accommodations-hero-content">
          <h1 className="accommodations-hero-title">Rooms</h1>
          <div className="content-divider" aria-hidden="true">⸻</div>
          <p className="accommodations-hero-text">
            Thoughtfully designed spaces for clarity, ease, and rest.
            Everything unnecessary has been removed. What remains has been considered.
          </p>
        </div>
      </section>

      <section className="accommodations-intro">
        <div className="accommodations-intro-inner">
          <p className="accommodations-intro-text">
            Amicus offers a curated selection of rooms and houses, each shaped for
            alignment rather than spectacle. Expect unhurried hospitality,
            craftsmanship in the details, and an atmosphere that speaks softly.
          </p>
        </div>
      </section>

      <section className="accommodations-rooms">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-card-image">
              <img src={room.image} alt="" />
            </div>
            <div className="room-card-content">
              <h2 className="room-card-title">{room.name}</h2>
              <div className="content-divider content-divider--small" aria-hidden="true">⸻</div>
              <p className="room-card-description">{room.description}</p>
              <ul className="room-card-features">
                {room.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="accommodations-cta">
        <div className="accommodations-cta-inner">
          <p className="accommodations-cta-text">
            Amicus is stewarded carefully and shared selectively. Inquire about
            availability and alignment.
          </p>
          <Link to="/#contact" className="accommodations-cta-button">
            Begin a conversation
          </Link>
        </div>
      </section>
    </article>
  )
}

export default Accommodations
