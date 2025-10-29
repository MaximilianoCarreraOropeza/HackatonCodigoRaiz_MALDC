"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import WalletConnect from "./WalletConnect"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <span className="text-xl font-bold gradient-text">StellarLaunch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Proyectos
            </Link>
            <Link to="/launch" className="text-foreground/80 hover:text-foreground transition-colors">
              Lanzar Proyecto
            </Link>
            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Proyectos
            </Link>
            <Link to="/launch" className="text-foreground/80 hover:text-foreground transition-colors">
              Lanzar Proyecto
            </Link>
            <WalletConnect />
          </div>
        )}
      </nav>
    </header>
  )
}
