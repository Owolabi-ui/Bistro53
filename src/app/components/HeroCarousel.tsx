'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

interface HeroCarouselProps {
  images: string[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Image
          src="/images/BISTRO logo.png"
          alt="Bistro Logo"
          width={120}
          height={60}
          className="drop-shadow-lg"
          priority
        />
      </div>

      {/* Image Carousel */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'translate-x-0' 
                : index < currentIndex 
                ? '-translate-x-full' 
                : 'translate-x-full'
            }`}
          >
            <Image
              src={image}
              alt={`Bistro food presentation ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`)
                // Fallback to a default image if the image fails to load
                const target = e.target as HTMLImageElement
                target.src = '/images/1797b1a8-4a0b-47ad-af85-d30520d53bd9.jpg'
              }}
              onLoad={() => console.log(`Successfully loaded: ${image}`)}
            />
            {/* Gradient Overlay - darker at top and bottom for logo and buttons visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 max-w-4xl animate-bounce-slow">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-2xl text-shadow-strong">
            TASTE THE <span className="text-yellow-400">VIBE</span>,<br />
            LOVE THE <span className="text-yellow-400">FLAVOR</span>
          </h1>
          
          {/* Buttons positioned below the text */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <button 
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#menu", offsetY: 80 },
                  ease: "power2.inOut"
                })
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-5 text-sm rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)' }}
            >
              View Menu
            </button>
            <button 
              onClick={() => {
                const message = encodeURIComponent('Hi! I would like to make a reservation at Bistro.')
                const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'}?text=${message}`
                window.open(whatsappUrl, '_blank')
              }}
              className="bg-black hover:bg-gray-800 text-yellow-400 font-medium py-2 px-5 text-sm rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)' }}
            >
              Make Reservation
            </button>
          </div>

        </div>
      </div>



      {/* Carousel Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <button
          onClick={() => {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: "#menu", offsetY: 80 },
              ease: "power2.inOut"
            })
          }}
          className="text-white opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Scroll down to menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
