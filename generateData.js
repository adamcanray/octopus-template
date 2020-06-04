const faker = require('faker')

let database = { products: [] }

for(let i=1;i<=100;i++){
  database.products.push({ 
    id:i,
    imgUrl: [
      faker.random.image(),
      faker.random.image(),
      faker.random.image(),
      faker.random.image()
    ],
    imgAlt: faker.random.words(),
    productName: faker.random.word(),
    productPrice: Math.floor(Math.random()*100),
    productRating: {
      rating: Math.floor(Math.random() * (5 - 0 + 1)) + 0,
      totalReview: Math.floor(Math.random()*1000)+1
    },
    productLocation: faker.random.locale(),
    kategori: {
      id:i,
      name: faker.random.word()
    },
  })
}

console.log(JSON.stringify(database))