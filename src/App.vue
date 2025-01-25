<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <header>
      <Navbar />
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>

    <!-- Footer -->
    <!-- <footer class="bg-blue-600 text-white p-4 text-center">
      <p>&copy; 2025 Noted. All rights reserved.</p>
    </footer> -->
  </div>
</template>

<style scoped></style>
