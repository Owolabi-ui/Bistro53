import Image from 'next/image'
import { Product } from '@/sanity/lib/queries'

interface ProductCardProps {
  product: Product
}

function getCategoryIcon(category: string): string {
  switch (category.toLowerCase()) {
    case 'food':
    case 'main-course':
      return '🍽️'
    case 'drinks':
    case 'beverages':
      return '🥤'
    case 'appetizer':
      return '🥗'
    case 'dessert':
      return '🍰'
    default:
      return '🍽️'
  }
}

function getCategoryLabel(category: string): string {
  switch (category.toLowerCase()) {
    case 'main-course':
      return 'Main Course'
    case 'beverages':
      return 'Beverages'
    case 'appetizer':
      return 'Appetizer'
    case 'dessert':
      return 'Dessert'
    default:
      return category.charAt(0).toUpperCase() + category.slice(1)
  }
}

function formatNairaPrice(price: number): string {
  return `₦${price.toLocaleString('en-NG', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    // Replace this number with your actual WhatsApp business number
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'
    
    const message = `I would like to order ${product.name}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image
          src={product.image?.asset?.url || '/images/placeholder-food.jpg'}
          alt={product.image?.alt || product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {product.featured && (
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black border-2 border-black">
              ⭐ Featured
            </span>
          )}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.category === 'beverages' || product.category === 'drinks'
              ? 'bg-black text-yellow-400 border border-yellow-400'
              : 'bg-yellow-100 text-black border border-yellow-400' 
          }`}>
            {getCategoryIcon(product.category)} {getCategoryLabel(product.category)}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-black">
            {formatNairaPrice(product.price)}
          </span>
        </div>

        {/* WhatsApp CTA Button */}
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border-2 border-black"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </div>
  )
}
