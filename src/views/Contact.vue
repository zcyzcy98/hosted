<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
      <p class="text-xl text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>

      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div class="space-y-4">
            <p class="flex items-center text-gray-600">
              <span class="font-medium mr-2">Address:</span>
              123 Fashion Street, Style City, ST 12345
            </p>
            <p class="flex items-center text-gray-600">
              <span class="font-medium mr-2">Email:</span>
              info@sutex.com
            </p>
            <p class="flex items-center text-gray-600">
              <span class="font-medium mr-2">Phone:</span>
              (123) 456-7890
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Business Hours</h2>
          <div class="space-y-2 text-gray-600">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>