<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white">
    <header class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-4">Welcome to {{ title }}</h1>
      <p class="text-xl">We create amazing experiences for you</p>
    </header>
    <main class="flex flex-col items-center">
      <RouterLink to="/start" class="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 mb-4">
        Get Started
      </RouterLink>
      <RouterLink to="/pricing" class="bg-white text-pink-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        Learn More
      </RouterLink>
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center">
      <p>&copy; {{ year }} Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',

  data() {
    return {
      year: new Date().getFullYear(),
      title: ''
    };
  },

  mounted() {
    this.title = import.meta.env.VITE_APP_TITLE;
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>