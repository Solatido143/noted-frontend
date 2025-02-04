<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar,
    }
}
</script>

<template>
    <header>
        <Navbar />
    </header>

    <main class="min-h-screen bg-pale-peach dark:bg-dark-charcoal text-gray-900 dark:text-white">
        <section class="min-h-screen flex items-center justify-center">
            <div class="flex flex-col items-center justify-center text-center py-20">
                <h1 class="text-4xl font-bold text-soft-purple">Welcome to Noted</h1>
                <p class="mt-4 text-lg text-custom-slate dark:text-light-tan max-w-xl">
                    Your ultimate task management and project tracking tool, built for efficiency and simplicity.
                </p>
                <router-link to="/register"
                    class="mt-6 px-6 py-3 bg-vibrant-pink text-white rounded-lg hover:bg-soft-purple transition">
                    Get Started
                </router-link>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-10">
            <div class="p-6 bg-white dark:bg-soft-gray rounded-lg shadow-md text-center">
                <h3 class="text-xl font-semibold text-soft-purple">Task Management</h3>
                <p class="mt-2 text-custom-slate dark:text-light-tan">Easily create, track, and manage your tasks with
                    an intuitive interface.</p>
            </div>
            <div class="p-6 bg-white dark:bg-soft-gray rounded-lg shadow-md text-center">
                <h3 class="text-xl font-semibold text-soft-purple">Project Tracking</h3>
                <p class="mt-2 text-custom-slate dark:text-light-tan">Stay on top of your projects with detailed
                    tracking and collaboration tools.</p>
            </div>
            <div class="p-6 bg-white dark:bg-soft-gray rounded-lg shadow-md text-center">
                <h3 class="text-xl font-semibold text-soft-purple">Seamless Collaboration</h3>
                <p class="mt-2 text-custom-slate dark:text-light-tan">Work with your team effortlessly and enhance
                    productivity.</p>
            </div>
        </section>

        <section class="text-center py-10">
            <h2 class="text-3xl font-bold text-soft-purple">Start Managing Your Tasks Today!</h2>
            <p class="mt-4 text-lg text-custom-slate dark:text-light-tan">Sign up now and boost your productivity.</p>
            <router-link to="/register"
                class="mt-6 inline-block px-6 py-3 bg-vibrant-pink text-white rounded-lg hover:bg-soft-purple transition">
                Sign Up Now
            </router-link>
        </section>
    </main>
</template>

<style scoped></style>
