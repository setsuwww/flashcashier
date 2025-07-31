'use client'

import { useState } from "react"
import { ImageOff } from "lucide-react"
import Button from "@/components/ui/Button"

interface ProductCardProps {
  image: string
  title: string
  type: "Foods" | "Drinks"
  price: string
  description: string
}

const addtoCart = () => {
  alert('Ditambahin ke keranjang')
}

export default function ProductCard({ image, title, type, price, description }: ProductCardProps) {
  const [hasError, setHasError] = useState(false)

  const shouldShowFallback = hasError || !image?.trim()

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
      {shouldShowFallback ? (
        <div className="w-full h-48 flex items-center justify-center bg-radial from-gray-50 to-gray-200">
          <ImageOff size={60} strokeWidth={1} className="text-gray-300" />
        </div>
      ) : (
        <img className="w-full h-48 object-cover"
          src={image}
          alt={title}
          onError={() => setHasError(true)}
        />
      )}

      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm font-medium text-gray-600">{type}</p>
        </header>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold text-yellow-500">Rp {price}</span>
          <Button size="sm" variant="primary" onClick={addtoCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
