<template>
    <div class="min-h-screen bg-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Choose the plan that’s right for you
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Simple and transparent pricing. No hidden fees.
                </p>
            </div>
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Basic Plan -->
                    <div v-for="plan in plans" :key="plan.title" class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class="px-6 py-8 sm:p-10 sm:pb-6">
                            <div class="text-center">
                                <h3 class="text-2xl font-medium text-gray-900">{{ plan.title }}</h3>
                                <div class="mt-4 flex items-center justify-center">
                                    <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                                        <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                                        <span class="font-extrabold">{{ plan.price }}</span>
                                    </span>
                                    <span class="text-xl font-medium text-gray-500">/mo</span>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                            <ul class="space-y-4">
                                <li v-for="(feature, index) in plan.features" :key="index"  class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 11l3 3L22 4M2 12l7 7 3-3"></path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base leading-6 text-gray-700">{{ feature }}</p>
                                </li>
                            </ul>
                            <div class="mt-8">
                                <div class="rounded-lg shadow-md">
                                    <a href="#" class="block w-full text-center text-white bg-indigo-600 border border-transparent rounded-lg py-3 px-6 font-medium hover:bg-indigo-700">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Other plans can be added similarly -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing',

    data() {
        return {
            plans: {}
        }
    },

    mounted() {
        this.plans = {
            basic: {
                title: 'Basic',
                price: 49.99,
                features: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                ]
            },
            plus: {
                title: 'Plus',
                price: 69.99,
                features: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5'
                ]
            },
            premium: {
                title: 'Premium',
                price: 99.99,
                features: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3',
                    'Feature 4',
                    'Feature 5',
                    'Feature 6',
                    'Feature 7'
                ]
            }
        }
    }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>