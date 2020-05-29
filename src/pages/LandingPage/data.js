
import SliderImage1 from '../../images/slider-image-1.jpg'
import SliderImage2 from '../../images/slider-image-2.jpg'
import SliderImage3 from '../../images/slider-image-3.jpg'
import ProductImage1 from '../../images/product-image-1.jpg'
import ProductImage2 from '../../images/product-image-2.jpg'
import ProductImage3 from '../../images/product-image-3.jpg'

const images = [
  {
    index: 4,
    // url: 'https://fakeimg.pl/250x125/00ff00',
    url: SliderImage1,
    title: 'Kebun Teh',
    subTitle: 'Bandung, Jawa barang'
  },
  {
    index: 5,
    url: SliderImage2,
    title: 'Panen Cabai',
    subTitle: 'Magelang, Jawa Tengah'
  },
  {
    index: 6,
    url: SliderImage3,
    title: 'Panen Apel',
    subTitle: 'Malang, Jawa Timur'
  },
]
const newService = [
  {
    title: 'ini title',
    subTitle: 'sub title',
    buttonText: 'ini button text',
    bgClass: 'c_gradient_bg_1',
  },
  {
    title: 'ini title',
    subTitle: 'sub title',
    buttonText: 'ini button text',
    bgClass: 'c_gradient_bg_2',
  },
  {
    title: 'ini title',
    subTitle: 'sub title',
    buttonText: 'ini button text',
    bgClass: 'c_gradient_bg_1',
  },
]
const newProducts = [
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk Panjang Banget (Test React Truncate)',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    kategori: {
      id:1,
      name: 'elektronik',
    },
    productLocation: 'Lokasi Product',
    productDiscount: true,
    productPriceAfterDiscount: 'Harga Produk Setelah Discount'
  },
  { 
    id:2,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    kategori: {
      id:2,
      name: 'elektronik',
    },
    productLocation: 'Lokasi Product',
  },
  { 
    id:3,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    kategori: {
      id:3,
      name: 'elektronik',
    },
    productLocation: 'Lokasi Product',
    productDiscount: true,
    productPriceAfterDiscount: 'Harga Produk Setelah Discount'
  },
  { 
    id:4,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    kategori: {
      id:4,
      name: 'elektronik',
    },
    productLocation: 'Lokasi Product',
  },
  { 
    id:5,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    kategori: {
      id:5,
      name: 'elektronik',
    },
    productLocation: 'Lokasi Product',
  },
]
const mostWantedProducts = [
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori:{
      id:1,
      name: 'kecantikan'
    }
  },
]
const recommendedProducts = [
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'makanan dan minuman'
    }
  },
]
const searchResultProducts = [
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk Panjang Banget (Test React Truncate)',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    button: true,
    buttonText: 'Tambah ke Keranjang'
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    button: true,
    buttonText: 'Tambah ke Keranjang'
  },
  { 
    id:1,
    imgUrl: ProductImage3,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    button: true,
    buttonText: 'Tambah ke Keranjang'
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 2,
      totalReview: 9
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    button: true,
    buttonText: 'Tambah ke Keranjang'
  },
  { 
    id:1,
    imgUrl: ProductImage1,
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 4.5,
      totalReview: 200
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    button: true,
    buttonText: 'Tambah ke Keranjang'
  },
]
const kategori = [
  {
    id:1,
    link: '/pakaian/',
    name:'Pakaian'
  },
  {
    id:2,
    link: '/olahraga/',
    name:'Olahraga'
  },
  {
    id:3,
    link: '/makanan-dan-minuman/',
    name:'Makanan & Minuman'
  },
  {
    id:4,
    link: '/kesehatan/',
    name:'Kesehatan'
  },
  {
    id:5,
    link: '/produk-digital/',
    name:'Produk Digital'
  },
]
const flashSaleProduct = [
  { 
    id:1,
    imgUrl: ProductImage1,
    imgAlt: 'img',
    productName: 'Nama Produk Panjang Banget (Test React Truncate)',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1,
      totalReview: 11
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
    productDiscount: true,
    productPriceAfterDiscount: 'Harga Produk Setelah Discount'
  },
  { 
    id:1,
    imgUrl: ProductImage2,
    imgAlt: 'img',
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 1.5,
      totalReview: 7
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
  },
  { 
    id:2,
    imgUrl: ProductImage3,
    imgAlt: 'img',
    productName: 'Nama Produk',
    productPrice: 'Harga Produk',
    productRating: {
      rating: 3.5,
      totalReview: 35
    },
    productLocation: 'Lokasi Product',
    kategori: {
      id:1,
      name: 'buku'
    },
  },
]

export {
  images,
  kategori,
  newProducts,
  mostWantedProducts,
  recommendedProducts,
  searchResultProducts,
  flashSaleProduct
}