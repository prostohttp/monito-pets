<script setup>
import { computed, shallowRef } from "vue";
import { useRoute } from "vue-router";
import HomePage from "@/layouts/HomePage.vue";
import DefaultPage from "@/layouts/DefaultPage.vue";
import CategoryPage from "@/layouts/CategoryPage.vue";
import ProductPage from "@/layouts/ProductPage.vue";
import CartPage from "@/layouts/CartPage.vue";
import AccountPage from "@/layouts/AccountPage.vue";
import BlankPage from "@/layouts/BlankPage.vue";

const layouts = [
  HomePage,
  DefaultPage,
  CartPage,
  CategoryPage,
  AccountPage,
  ProductPage,
  BlankPage,
];

const layoutRef = shallowRef(DefaultPage);
const route = useRoute();
const layout = computed(() => {
  layouts.forEach((layout) => {
    if (layout.__name === route.meta.layout) layoutRef.value = layout;
  });
  return layoutRef.value;
});
</script>

<template v-cloak>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
