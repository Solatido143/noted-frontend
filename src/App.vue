<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header>
      <Navbar />
    </header>

    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>

  </div>
</template>

<style scoped></style>
