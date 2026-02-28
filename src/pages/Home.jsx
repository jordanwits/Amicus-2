import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Home.css'

const HERO_LINE_1 = 'A sanctuary of quiet excellence,'
const HERO_LINE_2A = 'where beauty carries presence'
const HERO_LINE_2B = 'and every detail whispers peace.'
const HERO_FULL = HERO_LINE_1 + '\n' + HERO_LINE_2A + '\n' + HERO_LINE_2B
const TYPING_SPEED = 60
const PAUSE_MS = 2400

function Home() {
  const [heroText, setHeroText] = useState('')
  const [phase, setPhase] = useState(0) // 0: line 1, 1: pause, 2: line 2a, 3: pause, 4: line 2b

  useEffect(() => {
    if (window.location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (phase === 0) {
      if (heroText.length < HERO_LINE_1.length) {
        const t = setTimeout(() => setHeroText(HERO_LINE_1.slice(0, heroText.length + 1)), TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        setHeroText(HERO_LINE_1 + '\n')
        setPhase(1)
      }
    } else if (phase === 1) {
      const t = setTimeout(() => setPhase(2), PAUSE_MS)
      return () => clearTimeout(t)
    } else if (phase === 2) {
      const target = HERO_LINE_1 + '\n' + HERO_LINE_2A
      if (heroText.length < target.length) {
        const t = setTimeout(() => setHeroText(target.slice(0, heroText.length + 1)), TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        setHeroText(target + '\n')
        setPhase(3)
      }
    } else if (phase === 3) {
      const t = setTimeout(() => setPhase(4), PAUSE_MS)
      return () => clearTimeout(t)
    } else if (phase === 4) {
      if (heroText.length < HERO_FULL.length) {
        const t = setTimeout(() => setHeroText(HERO_FULL.slice(0, heroText.length + 1)), TYPING_SPEED)
        return () => clearTimeout(t)
      }
    }
  }, [phase, heroText])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-image-wrapper">
          <img
            src="/hero-inn.png"
            alt=""
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-tagline" aria-live="polite">
            {heroText.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < heroText.split('\n').length - 1 ? <br /> : null}
              </span>
            ))}
            {heroText.length < HERO_FULL.length && (
              <span className="hero-cursor" aria-hidden="true">|</span>
            )}
          </p>
        </div>
      </section>

      <section className="home-section home-section--cream">
        <div className="home-section-inner">
          <div className="home-section-content">
            <h2 className="home-section-title">The Vision</h2>
            <div className="content-divider" aria-hidden="true">⸻</div>
            <p className="home-section-text">
              Excellence is felt more than announced. Amicus exists for those who
              recognize that the most meaningful experiences are often the most
              quietly composed. Here, beauty is intentional and hospitality is unhurried.
            </p>
            <Link to="/vision" className="home-section-link">Learn more</Link>
          </div>
          <div className="home-section-image">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-section-inner home-section-inner--reverse">
          <div className="home-section-content">
            <h2 className="home-section-title">A Place to Stay</h2>
            <div className="content-divider" aria-hidden="true">⸻</div>
            <p className="home-section-text">
              Amicus is not a resort or a retreat center. It is a privately hosted
              place to stay — designed to support clarity, ease, and thoughtful living.
              Everything unnecessary has been removed. What remains has been considered.
            </p>
            <Link to="/place-to-stay" className="home-section-link">Discover</Link>
          </div>
          <div className="home-section-image">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-features">
          <h2 className="home-features-title">The Experience</h2>
          <div className="content-divider" aria-hidden="true">⸻</div>
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-image home-feature-image--clear">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
                  alt=""
                />
              </div>
              <h3 className="home-feature-title">Your Stay</h3>
              <p className="home-feature-text">
                Thoughtfully designed rooms and suites for clarity and rest.
              </p>
              <Link to="/accommodations" className="home-feature-link">View rooms</Link>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-image">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                  alt=""
                />
              </div>
              <h3 className="home-feature-title">The Experience</h3>
              <p className="home-feature-text">
                Composed, not programmed. Atmosphere that speaks softly.
              </p>
              <Link to="/experience" className="home-feature-link">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-invitation home-invitation--contact">
        <div className="home-invitation-inner">
          <h2 className="home-invitation-title">An Invitation</h2>
          <div className="content-divider" aria-hidden="true">⸻</div>
          <p className="home-invitation-text">
            Amicus is stewarded carefully and shared selectively. If this vision resonates with you, we'd welcome a conversation — not about logistics or availability, but about alignment.
          </p>
        </div>
      </section>

      <section id="contact" className="home-contact">
        <div className="home-contact-inner">
          <h2 className="home-contact-title">Begin a conversation</h2>
          <div className="content-divider" aria-hidden="true">⸻</div>
          <p className="home-contact-intro">
            Share a few words below, and we'll be in touch.
          </p>
          <div className="home-contact-form-wrapper">
            <div className="home-contact-watermark" aria-hidden="true">
              <img src="/AMICUS%20HOUSE%20Logo%20(3).png" alt="" />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
