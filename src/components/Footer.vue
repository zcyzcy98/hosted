<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">About Us</h3>
          <p class="text-gray-300">Quality apparel for every occasion.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/products" class="text-gray-300 hover:text-white">Products</router-link></li>
            <li><router-link to="/about" class="text-gray-300 hover:text-white">About</router-link></li>
            <li><router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="text-gray-300 space-y-2">
            <li>Email: info@sutex.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>