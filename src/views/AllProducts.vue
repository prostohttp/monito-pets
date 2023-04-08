<script setup>
import AppProductsGrid from "@/components/pieces/AppProductsGrid.vue";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { exchangeRateProducts } = storeToRefs(productStore);
</script>

<template>
  <div class="m-auto max-w-1180 px-[16px] xl:px-0">
    <TheBreadcrumb />
    <AppProductsGrid :products="exchangeRateProducts" :first="0" />
  </div>
</template>
