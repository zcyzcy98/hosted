<script setup lang="ts">
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    description: 'With over 15 years in fashion retail, Sarah leads our vision for sustainable and stylish apparel.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    description: 'Michael brings contemporary designs to life while maintaining our commitment to quality.'
  },
  {
    name: 'Emma Williams',
    role: 'Customer Experience',
    description: 'Emma ensures every customer receives exceptional service and support.'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">About SUTEX</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        We're passionate about creating high-quality apparel that combines style, comfort, and sustainability.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p class="text-gray-600">
          Founded in 2020, SUTEX began with a simple mission: to create premium clothing that looks good and feels great.
          We believe in sustainable fashion that doesn't compromise on style or quality.
        </p>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
        <ul class="space-y-4 text-gray-600">
          <li>✓ Quality craftsmanship in every piece</li>
          <li>✓ Sustainable and ethical production</li>
          <li>✓ Customer satisfaction guaranteed</li>
          <li>✓ Innovation in design and materials</li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.name" class="text-center">
          <div class="bg-gray-100 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="text-indigo-600 mb-4">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>