import { client } from './client'
import { groq } from 'next-sanity'

export interface Product {
  _id: string
  name: string
  category: string
  price: number
  description: string
  image: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  featured: boolean
  slug: {
    current: string
  }
}

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      category,
      price,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      featured,
      slug
    }`
  )
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      category,
      price,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      featured,
      slug
    }`
  )
}
