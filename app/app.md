Transaksi({
  Pilih Meja -> /save/meja/:meja -> Pilih makanan & minuman yang dipesan -> Submit()

  Pesanan({
    Status: {
      Menunggu -> Selesai() 
    }
  })

  Pembayaran Makanan/Minuman * jumlah dibeli * harga = Hasil()

  Save -> History()
})

Makanan(harga()) * jumlah Makanan()
