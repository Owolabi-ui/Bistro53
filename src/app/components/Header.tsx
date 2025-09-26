'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+2347077538353'
    const message = 'Hello! I would like to know more about your services.'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/BISTRO logo.png"
              alt="Bistro Logo"
              width={80}
              height={28}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#menu" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
              Menu
            </a>
            <button onClick={handleContactClick} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <a 
                href="#menu" 
                className="text-yellow-400 hover:text-yellow-300 transition-colors py-2 px-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </a>
              <button 
                onClick={handleContactClick}
                className="text-yellow-400 hover:text-yellow-300 transition-colors py-2 px-2 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
