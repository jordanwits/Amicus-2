import { Link, useLocation } from 'react-router-dom'
import './Layout.css'
import { useState } from 'react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/vision', label: 'The Vision' },
  { path: '/experience', label: 'The Experience' },
  { path: '/place-to-stay', label: 'A Place to Stay' },
  { path: '/accommodations', label: 'Rooms' },
]

function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Amicus" className="logo-img" />
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${location.pathname === path ? 'nav-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  )
}

export default Layout
