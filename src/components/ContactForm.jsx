import { useState } from 'react'
import './ContactForm.css'

// Configure your API endpoint here when backend is ready
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required.'
    if (!formData.email.trim()) return 'Email is required.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.'
    if (!formData.message.trim()) return 'Message is required.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setErrorMessage(validationError)
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Unable to send. You may contact us directly by email.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          required
          autoComplete="name"
          className={status === 'error' && !formData.name ? 'contact-form-input--error' : ''}
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          required
          autoComplete="email"
          className={status === 'error' && !formData.email ? 'contact-form-input--error' : ''}
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          required
          rows={5}
          className={status === 'error' && !formData.message ? 'contact-form-input--error' : ''}
        />
      </div>

      {status === 'error' && errorMessage && (
        <p className="contact-form-message contact-form-message--error" role="alert">
          {errorMessage}
        </p>
      )}

      {status === 'success' && (
        <p className="contact-form-message contact-form-message--success" role="status">
          Thank you. We will be in touch.
        </p>
      )}

      <button
        type="submit"
        className="contact-form-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}

export default ContactForm
