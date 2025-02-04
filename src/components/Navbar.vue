<template>
    <nav
        class="bg-soft-gray dark:bg-dark-charcoal fixed w-full z-20 top-0 start-0 border-b border-slate dark:border-charcoal">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap text-pale-peach dark:text-muted-lavender">Noted</span>
            </router-link>
            <div class="flex md:hidden space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button @click="toggleNavbar" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-light-tan rounded-lg md:hidden hover:bg-pale-peach focus:outline-none focus:ring-2 focus:ring-warm-yellow dark:text-soft-green dark:hover:bg-charcoal dark:focus:ring-bright-red">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div ref="navbar" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate rounded-lg bg-light-tan md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-soft-gray dark:bg-charcoal md:dark:bg-dark-charcoal dark:border-charcoal">
                    <li>
                        <router-link to="/"
                            class="block py-2 px-3 text-white bg-vibrant-pink rounded-sm md:bg-transparent md:text-vibrant-pink md:p-0 md:dark:text-soft-green"
                            aria-current="page">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about"
                            class="block py-2 px-3 text-charcoal rounded-sm hover:bg-soft-gray md:hover:bg-transparent md:hover:text-soft-purple md:p-0 md:dark:hover:text-soft-green dark:text-pale-peach dark:hover:bg-charcoal dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate">
                            About
                        </router-link>
                    </li>
                    <li v-if="authStore.isAuthenticated">
                        <router-link to="/projects"
                            class="block py-2 px-3 text-charcoal rounded-sm hover:bg-soft-gray md:hover:bg-transparent md:hover:text-soft-purple md:p-0 md:dark:hover:text-soft-green dark:text-pale-peach dark:hover:bg-charcoal dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate">
                            Projects
                        </router-link>
                    </li>
                    <li v-if="!authStore.isAuthenticated">
                        <router-link to="/login"
                            class="block py-2 px-3 text-charcoal rounded-sm hover:bg-soft-gray md:hover:bg-transparent md:hover:text-soft-purple md:p-0 md:dark:hover:text-soft-green dark:text-pale-peach dark:hover:bg-charcoal dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate">
                            Login
                        </router-link>
                    </li>
                    <li v-if="!authStore.isAuthenticated">
                        <router-link to="/register"
                            class="block py-2 px-3 text-charcoal rounded-sm hover:bg-soft-gray md:hover:bg-transparent md:hover:text-soft-purple md:p-0 md:dark:hover:text-soft-green dark:text-pale-peach dark:hover:bg-charcoal dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate">
                            Register
                        </router-link>
                    </li>
                    <li v-if="authStore.isAuthenticated">
                        <button @click="authStore.logout()" class="block py-2 px-3 text-charcoal rounded-sm hover:bg-soft-gray md:hover:bg-transparent md:hover:text-soft-purple md:p-0 md:dark:hover:text-soft-green dark:text-pale-peach dark:hover:bg-charcoal dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore();
const navbar = ref(null);

const toggleNavbar = () => {
    if (navbar.value) {
        navbar.value.classList.toggle('hidden');
    }
};
</script>

<style scoped></style>