import React from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - TikTok Wrapped',
  description: 'Learn about TikTok Wrapped - an independent service that helps you understand your TikTok activity data. Privacy-focused, free, and not affiliated with TikTok.',
  keywords: [
    'TikTok Wrapped',
    'About TikTok Wrapped',
    'TikTok data analysis',
    'Privacy',
    'FAQ',
  ],
  openGraph: {
    title: 'About Us - TikTok Wrapped',
    description: 'Learn about TikTok Wrapped - an independent service that helps you understand your TikTok activity data.',
    url: 'https://ttwrapper.com/about',
  },
  alternates: {
    canonical: 'https://ttwrapper.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">About Us</h1>
        
        <div className="about-content">
          <p className="about-text">
            TikTok Wrapped is an independent online service designed to help users better understand their personal TikTok activity data.
          </p>
          
          <p className="about-text">
            TikTok allows users to download an official data export containing information about their activity on the platform. While this data belongs to the user, it is often delivered in a raw and unstructured format that is difficult to interpret. TikTok Wrapped provides tools that organize this data and present it in a clear, readable, and user-friendly way.
          </p>
          
          <p className="about-text">
            The website allows users to upload their own TikTok data export and receive automated insights based solely on that file. The service focuses on summarization, visualization, and general analysis of usage patterns to help users gain a better understanding of their digital behavior.
          </p>
          
          <p className="about-text">
            TikTok Wrapped does not create accounts, does not require registration, and does not provide social networking or content hosting features. The website exists solely as an informational tool that processes user-provided files at the user&apos;s request.
          </p>
          
          <p className="about-text">
            We aim to provide a simple, transparent, and privacy-focused experience. TikTok Wrapped is not affiliated with or endorsed by TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>

      <div className="card faq-card" id="faq">
        <h2 className="section-title">FAQ</h2>
        
        <div className="faq-container">
          <div className="faq-item">
            <h3 className="faq-question">What is TikTok Wrapped?</h3>
            <p className="faq-answer">
              TikTok Wrapped is an online tool that helps users analyze and better understand their personal TikTok activity using their official TikTok data export.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How do I get my TikTok data export?</h3>
            <p className="faq-answer">
              You can request and download your data export from TikTok&apos;s settings (Data / Privacy). Once you receive the ZIP file from TikTok, you can upload it to TikTok Wrapped.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Do you store my uploaded ZIP file?</h3>
            <p className="faq-answer">
              Files are processed only to generate your requested insights. We do not store, sell uploaded data and do not use it for ad personalization.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Is TikTok Wrapped affiliated with TikTok?</h3>
            <p className="faq-answer">
              No. TikTok Wrapped is an independent service and is not affiliated with or endorsed by TikTok or ByteDance.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Is TikTok Wrapped free to use?</h3>
            <p className="faq-answer">
              The core functionality of the website is available without payment. The site may display advertisements to support ongoing development and hosting costs.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Structured Data for SEO */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is TikTok Wrapped?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TikTok Wrapped is an online tool that helps users analyze and better understand their personal TikTok activity using their official TikTok data export.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get my TikTok data export?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "You can request and download your data export from TikTok's settings (Data / Privacy). Once you receive the ZIP file from TikTok, you can upload it to TikTok Wrapped.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you store my uploaded ZIP file?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Files are processed only to generate your requested insights. We do not store, sell uploaded data and do not use it for ad personalization.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is TikTok Wrapped affiliated with TikTok?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. TikTok Wrapped is an independent service and is not affiliated with or endorsed by TikTok or ByteDance.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is TikTok Wrapped free to use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The core functionality of the website is available without payment. The site may display advertisements to support ongoing development and hosting costs.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}

