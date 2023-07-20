<template>
    <nav
        class="bg-white dark:bg-gray-900 sticky top-0 w-full z-20 border-b border-gray-200 dark:border-gray-600 px-4 py-2 mb-1 shadow-md">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{name: 'films'}" class="flex items-center">
                <img src="@/assets/logo.png" class="h-8 mr-3" alt="Star wars Logo">
            </router-link>
            <div class="flex md:order-2 justify-end">
                
                <login-form />

                
                <register-form />
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'characters' }"
                        class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-blue-500"
                        aria-current="Characters">Characters</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'films' }"
                            class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-blue-500"
                            aria-current="Films">Films</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'planets' }"
                            class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-blue-500"
                            aria-current="Planets">Planets</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }"
                            class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-blue-500"
                            aria-current="About">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
    name: 'NavBar',
    components: {
        LoginForm,
        RegisterForm
    },
    data() {
        return {
            
        }
    },
}
</script>
<style></style>