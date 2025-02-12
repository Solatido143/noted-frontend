<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import router
import { register } from '@/services/authService';

const router = useRouter();

const username = ref('');
const displayName = ref('');
const password = ref('');
const confirmPassword = ref('');

const errorMessage = ref('');

const handleRegister = async () => {
    errorMessage.value = '';

    if (!username.value || !displayName.value || !password.value || !confirmPassword.value) {
        errorMessage.value = "All fields are required!";
        return;
    }

    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Passwords do not match!";
        return;
    }

    try {
        const response = await register(username.value, password.value);

        if (response === "OK") {
            errorMessage.value = '';
            router.push('/login');
        } else {
            errorMessage.value = 'Unexpected response from server';
        }
    } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Registration failed. Please try again.';
    }
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-md p-6 bg-white dark:bg-dark-charcoal rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center text-soft-purple dark:text-muted-lavender">
                Create an Account
            </h2>
            <form class="mt-6" @submit.prevent="handleRegister">
                <div>
                    <label for="username"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Username</label>
                    <input v-model="username" type="text" id="username" required
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white" />
                </div>
                <div class="mt-4">
                    <label for="display-name" class="block text-sm font-medium text-slate dark:text-light-tan">Display
                        Name</label>
                    <input v-model="displayName" type="text" id="display-name" required
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white" />
                </div>
                <div class="mt-4">
                    <label for="password"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Password</label>
                    <input v-model="password" type="password" id="password" autocomplete="new-password" required
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white" />
                </div>
                <div class="mt-4">
                    <label for="confirm-password"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Confirm Password</label>
                    <input v-model="confirmPassword" type="password" id="confirm-password" autocomplete="new-password"
                        required
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white" />
                </div>
                <div v-if="errorMessage" class="mb-4 text-sm text-bright-red text-center">
                    {{ errorMessage }}
                </div>
                <button type="submit"
                    class="w-full mt-6 px-4 py-2 text-white bg-soft-purple rounded-lg hover:bg-vibrant-pink focus:ring-2 focus:ring-vibrant-pink transition ease-out">
                    Register
                </button>
            </form>
            <p class="mt-4 text-center text-sm text-slate dark:text-light-tan">
                Already have an account? <router-link to="/login"
                    class="text-vibrant-pink hover:underline">Login</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped></style>
