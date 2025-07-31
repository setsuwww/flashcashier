'use client'

import React from 'react'
import ProductCard from './ProductCard'
import ProductHeader from './ProductHeader'

const products = [
  {
    image: 'https://example.com/product-imge.jpg',
    title: 'Mie Goreng',
    type: 'Foods' as const,
    price: '6000',
    description: 'Mie goreng enak dengan bumbu spesial.',
  },
  {
    image: 'https://example.com/product-imge.jpg',
    title: 'Nasi Goreng',
    type: 'Foods' as const,
    price: '10000',
    description: 'Nasi goreng dengan topping ayam dan telur.',
  },
  {
    image: 'https://example.com/product-imge.jpg',
    title: 'Mie Ayam',
    type: 'Foods' as const,
    price: '9000',
    description: 'Mie ayam dengan kuah kaldu dan bakso.',
  },
  {
    image: 'https://example.com/product-imge.jpg',
    title: 'Goodday Cappuccino',
    type: 'Drinks' as const,
    price: '500',
    description: 'Minuman kopi instan dingin menyegarkan.',
  },
]

export default function Page() {
  return (
    <section className="space-y-8">
      <ProductHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            type={product.type}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  )
}
