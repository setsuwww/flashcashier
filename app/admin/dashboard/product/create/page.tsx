'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Dropdown from '@/components/ui/Dropdown'

const CreateProductPage = () => {
  const [form, setForm] = useState({
    name: '',
    image: '',
    description: '',
    type: 'makanan',
    price: '',
    categoryId: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      ...form,
      price: parseInt(form.price),
      categoryId: parseInt(form.categoryId),
    }

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to create product')

      alert('Produk berhasil dibuat!')
    } catch (err) {
      console.error(err)
      alert('Gagal menyimpan produk')
    }
  }

  return (
    <section>

    <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add new product</h1>
        <p className="text-sm text-gray-500">Insert form below to add new Product</p>
    </header>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <Input
            label="Product Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
          />

          <Input
            label="Product Image"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Product Image"
          />

          <Input
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Product Description</label>
           <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            placeholder="Product detail description"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <Dropdown label="Jenis Produk" value={form.type}
                options={['makanan', 'minuman']}
                onChange={(val) => setForm((prev) => ({ ...prev, type: val }))}
            />

            <Dropdown label="Kategori" value={form.categoryId}
                options={['1', '2']} // nanti kamu bisa fetch dari API
                onChange={(val) => setForm((prev) => ({ ...prev, categoryId: val }))}
        />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Simpan Produk
        </button>
      </form>
    </section>
  )
}

export default CreateProductPage
