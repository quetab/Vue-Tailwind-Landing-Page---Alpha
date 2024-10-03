<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                    <input
                        v-model="form.name"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your name"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                    <input
                        v-model="form.email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your email"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                    <textarea
                        v-model="form.message"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="4"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
        <!-- error card -->
        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <strong class="font-bold block">Oops!</strong>
            <span class="block sm:inline block">{{ error }}</span>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            url: '',
            error: ''
        };
    },

    methods: {
        submitForm() {
            if (!this.validateForm()) {
                return;
            }
            this.axios.post(this.url, this.form)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        validateForm() {
            // Add validation logic here
            if (!this.form.name || !this.form.email || !this.form.message) {
                this.error = 'Please fill in all fields';
                return false;
            }
            this.error = '';
            return true;
        }
    },

    mounted() {
        this.url = import.meta.env.VITE_API_BASE_URL + '/contact';
    }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>