import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - TikTok Wrapped',
  description: 'Read guides and articles about TikTok data analysis, privacy, and how to understand your social media activity.',
  keywords: [
    'TikTok Blog',
    'TikTok Guides',
    'TikTok Data Analysis',
    'Social Media Analytics',
  ],
  openGraph: {
    title: 'Blog - TikTok Wrapped',
    description: 'Read guides and articles about TikTok data analysis and privacy.',
    url: 'https://ttwrapper.com/blog',
  },
  alternates: {
    canonical: 'https://ttwrapper.com/blog',
  },
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'what-your-tiktok-usage-says-about-your-digital-habits',
      title: 'What Your TikTok Usage Says About Your Digital Habits',
      description: 'Learn how TikTok usage data reveals digital habits, activity patterns, and long-term behavior trends using your own data export.',
      date: '2026-01-05',
    },
    {
      slug: 'tiktok-wrapped-vs-tiktok-analytics-whats-the-difference',
      title: 'TikTok Wrapped vs TikTok Analytics: What\'s the Difference?',
      description: 'Compare TikTok Wrapped and TikTok Analytics to understand how each works, what data they use, and which insights they provide.',
      date: '2026-01-04',
    },
    {
      slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide',
      title: 'How to Analyze TikTok Data Safely (Privacy-First Guide)',
      description: 'Learn how to analyze your TikTok data safely, protect your privacy, and choose responsible tools when working with TikTok data exports.',
      date: '2026-01-03',
    },
    {
      slug: 'tiktok-wrapped-explained-what-it-is-how-it-works',
      title: 'TikTok Wrapped Explained: What It Is & How It Works (2026)',
      description: 'Learn what TikTok Wrapped is, how it works using TikTok data exports, what insights it shows, and whether it\'s an official TikTok feature.',
      date: '2026-01-02',
    },
    {
      slug: 'how-to-download-analyze-tiktok-data',
      title: 'How to Download and Analyze TikTok Data (2026 Guide)',
      description: 'Learn how to download your TikTok data export, what the ZIP file contains, and how to analyze your activity safely using your own data.',
      date: '2026-01-01',
    },
  ]

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">Blog</h1>
        <p className="blog-intro">
          Guides and articles about TikTok data analysis, privacy, and understanding your social media activity.
        </p>
      </div>

      <div className="blog-posts">
        {posts.map((post) => (
          <article key={post.slug} className="card blog-post-card">
            <Link href={`/blog/${post.slug}`} className="blog-post-link">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-description">{post.description}</p>
              <div className="blog-post-meta">
                <time dateTime={post.date} className="blog-post-date">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

