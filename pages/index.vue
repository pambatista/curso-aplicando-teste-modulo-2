<template>
  <main class="my-8">
    <div v-if="!errorMessage" class="container mx-auto px-6">
      <h3 class="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
      <span class="mt-3 text-sm text-gray-500">200+ Products</span>
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
      >
        <product-card v-for="item in products" :key="item.id" :product="item" />
      </div>
    </div>
    <h3 v-else class="text-center text-3xl font-bold">{{ errorMessage }}</h3>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      errorMessage: '',
    }
  },
  async mounted() {
    try {
      this.products = (await this.$axios.get('/api/products')).data.products
    } catch (error) {
      this.errorMessage = 'Problemas ao carregar a lista!'
    }
  },
}
</script>
