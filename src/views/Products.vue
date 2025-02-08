<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Casual Pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Our Products</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="product in products" :key="product.id" class="group">
        <div class="relative">
          <img :src="product.image" :alt="product.name" class="w-full h-80 object-cover rounded-lg">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
          <p class="mt-1 text-gray-600">${{ product.price }}</p>
          <button class="mt-2 w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>