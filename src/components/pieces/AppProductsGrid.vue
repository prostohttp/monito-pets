<script setup>
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import AppProduct from "@/components/pieces/AppProduct.vue";

const {} = defineProps({
  first: {
    type: Number,
    required: true,
  },
  last: {
    type: Number,
    required: false,
  },
});

const productStore = useProductStore();
const { exchangeRateProducts } = storeToRefs(productStore);
</script>

<template>
  <div class="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-4">
    <AppProduct
      :product="product"
      v-for="product in exchangeRateProducts.slice(first, last)"
    >
    </AppProduct>
  </div>
</template>
