import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - TikTok Wrapped',
  description: 'Contact TikTok Wrapped - Get in touch with us for questions about the service, privacy, technical issues, or legal matters. Email: hello@affsquad.com',
  keywords: [
    'Contact TikTok Wrapped',
    'Support',
    'Contact',
    'Help',
    'Customer Service',
  ],
  openGraph: {
    title: 'Contact Us - TikTok Wrapped',
    description: 'If you have questions about TikTok Wrapped, our website, or how the service works, you can reach us using the contact information below.',
    url: 'https://ttwrapper.com/contact',
  },
  alternates: {
    canonical: 'https://ttwrapper.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="contact-content">
          <p className="contact-intro">
            If you have questions about TikTok Wrapped, our website, or how the service works, you can reach us using the contact information below.
          </p>

          <section className="contact-section">
            <h2 className="contact-section-title">We welcome inquiries related to:</h2>
            <ul className="contact-list">
              <li>general questions about the platform,</li>
              <li>privacy and data handling,</li>
              <li>technical issues or feedback,</li>
              <li>legal or policy-related matters.</li>
            </ul>
          </section>

          <section className="contact-section">
            <h2 className="contact-section-title">How to Contact Us</h2>
            <div className="contact-method">
              <div className="contact-method-label">Email:</div>
              <a href="mailto:hello@affsquad.com" className="contact-email">
                hello@affsquad.com
              </a>
            </div>
            <p className="contact-note">
              We aim to respond to all legitimate inquiries within a reasonable timeframe.
            </p>
          </section>

          <section className="contact-section">
            <h2 className="contact-section-title">About Communication</h2>
            <p className="contact-text">
              TikTok Wrapped is an independent online service focused on analyzing user-provided TikTok data exports. We do not offer customer support via social media, and we do not provide phone support at this time.
            </p>
            <p className="contact-text">
              Please do not send sensitive personal information by email unless it is necessary to address your request.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

