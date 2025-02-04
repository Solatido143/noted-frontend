<script setup>
import { ref } from 'vue'
import { login } from '@/services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = async () => {
    errorMessage.value = ''
    try {
        const response = await login(username.value, password.value)
        
        if (response === "OK") {
            router.push('/')
        } else {
            errorMessage.value = 'Unexpected response from server'
        }
    } catch (error) {
        errorMessage.value = error || 'Login failed. Please try again.'
    }
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-md p-6 bg-white dark:bg-dark-charcoal rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center text-soft-purple dark:text-muted-lavender">
                Login to Noted
            </h2>
            <form @submit.prevent="handleLogin" class="mt-6">
                <div>
                    <label for="username"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Username</label>
                    <input v-model="username" type="text" id="username"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <div class="mt-4">
                    <label for="password"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Password</label>
                    <input v-model="password" type="password" id="password"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <label class="flex items-center text-sm text-slate dark:text-light-tan">
                        <input type="checkbox" class="mr-2 rounded text-soft-purple" /> Remember me
                    </label>
                    <a href="#" class="text-sm text-vibrant-pink hover:underline">Forgot password?</a>
                </div>
                <button type="submit"
                    class="w-full mt-6 px-4 py-2 text-white bg-soft-purple rounded-lg hover:bg-vibrant-pink focus:ring-2 focus:ring-vibrant-pink">
                    Login
                </button>
                <div v-if="errorMessage" class="mb-4 text-sm text-red-500">
                    {{ errorMessage }}
                </div>
            </form>
            <p class="mt-4 text-center text-sm text-slate dark:text-light-tan">
                Don't have an account? <router-link to="/register" class="text-vibrant-pink hover:underline">Sign
                    up</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped></style>