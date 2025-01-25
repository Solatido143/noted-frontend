<template>
    <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- Logo Section -->
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap">
                    Noted
                </span>
            </a>

            <!-- Mobile Menu Button -->
            <button id="triggerEl" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                aria-controls="navbar-default" aria-expanded="false" @click="toggleNavbar">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <!-- Navigation Links -->
            <div ref="navbar" class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <router-link to="/" class="nav-links block py-2 px-3 rounded-sm md:p-0">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/projects" class="nav-links block py-2 px-3 rounded-sm md:border-0 md:p-0">
                            Projects
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/login" class="nav-links block py-2 px-3 rounded-sm md:border-0 md:p-0">
                            Login
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/register" class="nav-links block py-2 px-3 rounded-sm md:border-0 md:p-0">
                            Register
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const navbar = ref(null);
const triggerEl = ref(null);

const toggleNavbar = () => {
    if (navbar.value) {
        navbar.value.classList.toggle('hidden');
    }
};

</script>

<style scoped>

</style>