'use client'

import Link from 'next/link'
import { useState, useMemo } from "react"
import { ImageOff, ShoppingCart } from "lucide-react"
import Button from "@/components/ui/Button"
import React from "react"
import { truncateWords } from '@/function/truncateWords';
import Image from 'next/image'

interface ProductCardProps {
  image: string
  title: string
  type: "Foods" | "Drinks"
  price: string
  description: string
}

const addToCart = () => {
  alert('Ditambahin ke keranjang')
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, type, price, description }) => {
  const [hasError, setHasError] = useState(false)
  const shouldShowFallback = hasError || !image?.trim()

  const truncatedDescription = useMemo(() => {
    return truncateWords(description, 5)
  }, [description])

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
      {shouldShowFallback ? (
        <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
          <ImageOff size={60} strokeWidth={1} className="text-gray-300" />
        </div>
      ) : (
        <Image className="w-full h-48 object-cover" width={200} height={200} src={image} alt={title} onError={() => setHasError(true)}/>
      )}

      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
          <p className="text-sm font-medium text-gray-400">{type}</p>
        </header>

        <article className="mb-4 space-y-1">
          <p className="text-gray-600 text-sm">{truncatedDescription}</p>
          <Link href="" className="text-orange-500 text-xs">View details</Link>
        </article>

        <div className="flex items-center justify-between">
          <span className="text-md font-semibold text-yellow-500">Rp {price}</span>
          <Button size="sm" variant="primary" onClick={addToCart}>
            <ShoppingCart size={20} />
            <span> Add to Cart </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProductCard)
