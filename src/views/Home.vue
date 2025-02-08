<script setup lang="ts">
const features = [
  {
    title: 'Quality Materials',
    description: 'Premium fabrics and materials for lasting comfort.'
  },
  {
    title: 'Modern Designs',
    description: 'Contemporary styles for today\'s fashion.'
  },
  {
    title: 'Fast Shipping',
    description: 'Quick delivery worldwide.'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gray-900 h-[600px]">
      <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')">
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Premium Apparel</h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl">Discover our collection of high-quality clothing designed for style and comfort.</p>
        <div class="mt-10">
          <router-link to="/products" class="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md">
            Shop Now
          </router-link>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us</h2>
        </div>
        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="feature in features" :key="feature.title" class="text-center">
            <h3 class="mt-3 text-xl font-medium text-gray-900">{{ feature.title }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>