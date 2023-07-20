<template>
    <div data-app>
        <v-dialog transition="dialog-bottom-transition" max-width="500" v-model="showModal">
            <template v-slot:activator="{ on, attrs }">
                <button v-if="!isLogIn" v-bind="attrs" v-on="on"
                    class="text-black bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2">
                    Login
                </button>
                <button v-else @click="logout()"
                    class="text-black bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2">
                    Logout
                </button>
            </template>

            <template v-slot:default="dialog">
                <div class="relative bg-white rounded-lg shadow">
                    <header class="flex flex-row justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                    </header>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900">Ready to soar among the stars? Login now and
                            blast off!</h3>
                        <form class="space-y-6" @submit.prevent="login()">
                            <p v-if="wrongLogin" class="mt-2 text-sm text-red-600"><span class="font-medium">Email or password incorrect,</span> please check and try again.</p>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input type="email" name="email" id="email" v-model="email"
                                    class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="jhon@xyz.com" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your
                                    password</label>
                                <input type="password" name="password" id="password" v-model="password"
                                    class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required placeholder="***********">
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <input id="remember" type="checkbox" value=""
                                        class="w-4 h-4 border border-gray-800 rounded bg-gray-200 focus:ring-3 focus:ring-blue-300">
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember
                                        me</label>
                                </div>
                                <a href="#" class="text-sm text-blue-700 hover:underline">Lost
                                    Password?</a>
                            </div>
                            <button type="submit"
                                class="w-full text-black bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login
                                to your account</button>
                        </form>
                    </div>
                    <div class="text-sm font-medium pb-5 pr-4 text-gray-500 text-end">
                        Not registered? <register-form as-link button-text="Create account" class="inline"></register-form>
                    </div>
                </div>
            </template>
        </v-dialog>
    </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue"
import auth_axios from '@/plugins/auth_axios'

export default {
    name: 'LoginForm',
    components: {
        RegisterForm
    },
    data() {
        return {
            showModal: false,
            wrongLogin: false,
            email: null,
            password: null,
            isLogIn: !!window.localStorage.getItem('jwtToken')
        }
    },
    methods: {
        async login() {
            this.wrongLogin = false;
            await auth_axios.post('login/', {
                email: this.email,
                password: this.password
            }).then(res => {
                this.showModal = false;
                this.isLogIn = true;
                window.localStorage.setItem('jwtToken', res.data.access)
            }).catch(() => {
                this.wrongLogin = true;
            })
        },
        logout() {
            this.isLogIn = false;
            this.showModal = true;
            window.localStorage.removeItem('jwtToken')
        }
    },
}
</script>
<style></style>