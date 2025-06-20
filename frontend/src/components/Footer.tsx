"use client"

import type React from "react"
import { useState } from "react"
import "./Footer.css"

interface FooterProps {
  onNavigate?: (path: string) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [easterEggCount, setEasterEggCount] = useState(0)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const handleEasterEgg = () => {
    const newCount = easterEggCount + 1
    setEasterEggCount(newCount)

    if (newCount === 5) {
      alert("🤖 AI Joke: Why did the neural network break up? It had too many layers of commitment issues!")
      setEasterEggCount(0)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavigation = (href: string) => {
    if (onNavigate) {
      onNavigate(href)
    }
  }

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="footer">
      {/* Top Divider */}
      <div className="footer-divider"></div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Column 1: Product */}
          <div className="footer-column">
            <h3 className="footer-title">Product</h3>
            <div className="footer-links">
              <a
                href="/register"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/register")
                }}
              >
                Register Agent
              </a>
              <a
                href="/marketplace"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/marketplace")
                }}
              >
                Explore Agents
              </a>
              <a
                href="/agents"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/agents")
                }}
              >
                My Agents
              </a>
              <a
                href="/dashboard"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/dashboard")
                }}
              >
                Dashboard
              </a>
              <a
                href="/services"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/services")
                }}
              >
                Services
              </a>
              <a
                href="/playground"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/playground")
                }}
              >
                Playground
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <div className="footer-links">
              <a
                href="/about"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/about")
                }}
              >
                About Us
              </a>
              <a
                href="/careers"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/careers")
                }}
              >
                Careers
                <span className="coming-soon">Soon</span>
              </a>
              <a
                href="/legal"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/legal")
                }}
              >
                Legal & Privacy
              </a>
              <a
                href="/terms"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/terms")
                }}
              >
                Terms of Service
              </a>
              <a
                href="/blog"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/blog")
                }}
              >
                Blog
              </a>
            </div>
          </div>

          {/* Column 3: Developers */}
          <div className="footer-column">
            <h3 className="footer-title">Developers</h3>
            <div className="footer-links">
              <a
                href="/docs"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/docs")
                }}
              >
                API Documentation
              </a>
              <a
                href="/webhooks"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/webhooks")
                }}
              >
                Webhooks
              </a>
              <a
                href="/sdk"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/sdk")
                }}
              >
                SDK
                <span className="coming-soon">Soon</span>
              </a>
              <button className="footer-link" onClick={() => handleExternalLink("https://github.com")}>
                GitHub
                <span className="external-icon">↗</span>
              </button>
              <a
                href="/status"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/status")
                }}
              >
                System Status
              </a>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="footer-column">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-links">
              <button className="footer-link" onClick={() => handleExternalLink("mailto:support@neuroip.xyz")}>
                support@neuroip.xyz
              </button>
              <a
                href="/help"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/help")
                }}
              >
                Help Center
              </a>
              <a
                href="/community"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/community")
                }}
              >
                Community
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <button
                className="social-link"
                onClick={() => handleExternalLink("https://twitter.com")}
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </button>
              <button
                className="social-link"
                onClick={() => handleExternalLink("https://discord.com")}
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path
                    fill="currentColor"
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                  />
                </svg>
              </button>
              <button
                className="social-link"
                onClick={() => handleExternalLink("https://linkedin.com")}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </button>
              <button
                className="social-link"
                onClick={() => handleExternalLink("https://github.com")}
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  {isSubscribed ? "✓" : "→"}
                </button>
              </form>
              {isSubscribed && <div className="newsletter-success">Thanks for subscribing! 🚀</div>}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="copyright" onClick={handleEasterEgg}>
              © 2025 NeuroIP Inc. All rights reserved.
            </div>
            <div className="powered-by">
              Powered by{" "}
              <button className="protocol-link" onClick={() => handleExternalLink("https://storyprotocol.xyz")}>
                Story Protocol
              </button>
            </div>
          </div>

          <div className="footer-bottom-right">
            <div className="language-selector">
              <button className="language-button">
                <span className="globe-icon">🌐</span>
                <span className="language-text">English</span>
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top" title="Scroll to top">
        <span className="scroll-arrow">↑</span>
      </button>
    </footer>
  )
}

export default Footer
