<script>

</script>
<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-md p-6 bg-white dark:bg-dark-charcoal rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center text-soft-purple dark:text-muted-lavender">
                Create an Account
            </h2>
            <form class="mt-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-slate dark:text-light-tan">Full Name</label>
                    <input type="text" id="name"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <div class="mt-4">
                    <label for="email" class="block text-sm font-medium text-slate dark:text-light-tan">Email</label>
                    <input type="email" id="email"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <div class="mt-4">
                    <label for="password"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Password</label>
                    <input type="password" id="password"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <div class="mt-4">
                    <label for="confirm-password"
                        class="block text-sm font-medium text-slate dark:text-light-tan">Confirm Password</label>
                    <input type="password" id="confirm-password"
                        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-purple dark:bg-soft-gray dark:text-white"
                        required />
                </div>
                <button type="submit"
                    class="w-full mt-6 px-4 py-2 text-white bg-soft-purple rounded-lg hover:bg-vibrant-pink focus:ring-2 focus:ring-vibrant-pink">
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
