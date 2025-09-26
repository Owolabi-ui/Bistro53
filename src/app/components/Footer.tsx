import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/BISTRO logo.png"
                alt="Bistro Logo"
                width={100}
                height={35}
                className="object-contain"
              />
            </div>
            <p className="text-yellow-300 text-sm">
              Delicious food and refreshing drinks delivered fresh to your door. 
              Quality ingredients, exceptional taste.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-yellow-400">Contact Us</h4>
            <div className="space-y-2 text-sm text-yellow-300">
              <p>📞 +234 707 753 8353</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=53+Isaac+John+Street+Fadeyi+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400 transition-colors flex items-start gap-2"
              >
                📍 53, Isaac John Street, Fadeyi Lagos
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-yellow-400">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/bistrolounge53?igsh=bWp2cm54MXNocTlr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@bistrolounge53?_t=ZS-903czl9wJJ1&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#menu" className="text-yellow-300 hover:text-yellow-400 transition-colors text-sm">
                Menu
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-400 mt-6 pt-6 text-center text-sm text-yellow-300">
          <p>&copy; 2025 Bistro. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}
