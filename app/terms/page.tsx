import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - TikTok Wrapped',
  description: 'TikTok Wrapped Terms of Service - Read our terms and conditions for using the service. Learn about user responsibilities and limitations.',
  keywords: [
    'Terms of Service',
    'Terms and Conditions',
    'TikTok Wrapped Terms',
    'User Agreement',
    'Service Terms',
  ],
  openGraph: {
    title: 'Terms of Service - TikTok Wrapped',
    description: 'By using TikTok Wrapped, you agree to the following terms and conditions.',
    url: 'https://ttwrapper.com/terms',
  },
  alternates: {
    canonical: 'https://ttwrapper.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">Terms of Service</h1>
        
        <div className="terms-content">
          <p className="terms-updated">
            <strong>Last updated:</strong> 29.12.2025
          </p>
          
          <p className="terms-intro">
            By using TikTok Wrapped, you agree to the following terms.
          </p>

          <section className="terms-section">
            <h2 className="terms-section-title">Service Description</h2>
            <p className="terms-text">
              TikTok Wrapped provides an automated data analysis tool for TikTok data exports. The service is provided &quot;as is&quot; and for informational purposes only.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">User Responsibilities</h2>
            <p className="terms-text">
              Users are responsible for:
            </p>
            <ul className="terms-list">
              <li>uploading only data they own or have the right to use,</li>
              <li>ensuring that uploaded files originate from TikTok&apos;s official data export feature.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">No Guarantees</h2>
            <p className="terms-text">
              While we strive for accuracy, TikTok Wrapped does not guarantee that all insights are complete, error-free, or suitable for specific decisions. The results should not be considered professional, legal, or financial advice.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">Intellectual Property</h2>
            <p className="terms-text">
              All website content, branding, and software logic belong to TikTok Wrapped unless otherwise stated. Users retain full ownership of their uploaded data.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">Limitation of Liability</h2>
            <p className="terms-text">
              TikTok Wrapped is not responsible for:
            </p>
            <ul className="terms-list">
              <li>decisions made based on generated insights,</li>
              <li>data loss caused by user error,</li>
              <li>interruptions or temporary unavailability of the service.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

