/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert([
    {
      name: 'Incredible Plastic Pants',
      price: '827.00',
      brand: 'Hauck - Johnson',
      image: 'http://loremflickr.com/640/480/fashion',
    },
    {
      name: 'Electronic Wooden Tuna',
      price: '765.00',
      brand: 'Johns - Farrell',
      image: 'http://loremflickr.com/640/480/food',
    },
    {
      name: 'Awesome Steel Mouse',
      price: '143.00',
      brand: 'Paucek, Kuvalis and Zieme',
      image: 'http://loremflickr.com/640/480/technics',
    },
  ]);
};
