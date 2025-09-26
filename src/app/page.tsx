'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from '@/app/components/ProductCard'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import HeroCarousel from '@/app/components/HeroCarousel'
import FloatingWhatsApp from '@/app/components/FloatingWhatsApp'
import { getProducts, Product } from '@/sanity/lib/queries'

export default function Home() {
  // Hero carousel images - using the uploaded hero images
  const heroImages = [
    '/images/hero/IMG_8631.jpg',
    '/images/hero/IMG_8619.jpg',
    '/images/hero/IMG_8643.jpg',
    '/images/hero/IMG_8668.jpg',
    '/images/hero/IMG_8702.jpg',
    '/images/hero/IMG_8782.jpg',
    '/images/hero/IMG_8806.jpg',
    '/images/hero/IMG_8831.jpg',
    '/images/hero/IMG_8850.jpg',
    '/images/hero/IMG_8852.jpg'
  ]

  // Products from Sanity CMS
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts()
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching products:', error)
        // Fallback to sample data if Sanity is not available
        setProducts([
          {
            _id: '1',
            name: "Signature Pasta",
            description: "Handmade pasta with our signature sauce, fresh herbs, and parmesan cheese",
            price: 24.99,
            image: {
              asset: {
                _id: 'sample1',
                url: '/images/ae221058-f0c5-4914-9560-33628ce50ee9.jpg'
              }
            },
            category: "food",
            featured: false,
            slug: { current: 'signature-pasta' }
          },
          {
            _id: '2',
            name: "Artisan Coffee",
            description: "Freshly roasted coffee beans, expertly brewed to perfection",
            price: 8.99,
            image: {
              asset: {
                _id: 'sample2',
                url: '/images/b0984f38-0e6a-4400-92fd-833785a22ef4.jpg'
              }
            },
            category: "beverages",
            featured: false,
            slug: { current: 'artisan-coffee' }
          },
          {
            _id: '3',
            name: "Gourmet Burger",
            description: "Premium beef patty with fresh vegetables and our special sauce on a brioche bun",
            price: 32.99,
            image: {
              asset: {
                _id: 'sample3',
                url: '/images/bf51c5e7-bcb6-4740-baed-2e444ff8d53e.jpg'
              }
            },
            category: "main-course",
            featured: true,
            slug: { current: 'gourmet-burger' }
          },
          {
            _id: '4',
            name: "Fresh Smoothie",
            description: "Blend of seasonal fruits with yogurt and honey, refreshingly healthy",
            price: 6.50,
            image: {
              asset: {
                _id: 'sample4',
                url: '/images/dd05809b-81d8-4cc3-815c-e6a7008e527f.jpg'
              }
            },
            category: "beverages",
            featured: false,
            slug: { current: 'fresh-smoothie' }
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])
  


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel Section */}
      <HeroCarousel images={heroImages} />
      
      {/* Navigation - Fixed position for after hero */}
      <div className="sticky top-0 z-40">
        <Header />
      </div>
      
      <main id="menu" className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
            Bistro Menu
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Delicious food and refreshing drinks delivered fresh
          </p>
        </section>

        {/* Products Grid */}
        <section>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading delicious menu items...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          
          {!loading && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products available yet.</p>
              <p className="text-gray-400">Visit <Link href="/admin" className="text-yellow-600 hover:underline">/admin</Link> to add products!</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
