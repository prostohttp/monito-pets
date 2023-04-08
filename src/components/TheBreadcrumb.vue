<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "@/stores/products";
import { usePartnersStore } from "@/stores/partners";
import { useCategoryStore } from "@/stores/category";
import { useArticlesStore } from "@/stores/articles";
import { useInformationStore } from "@/stores/information";
import { storeToRefs } from "pinia";

const productsStore = useProductStore();
const partnersStore = usePartnersStore();
const categoryStore = useCategoryStore();
const articlesStore = useArticlesStore();
const informationStore = useInformationStore();
const { information } = storeToRefs(informationStore);
const { products } = storeToRefs(productsStore);
const { partners } = storeToRefs(partnersStore);
const { flattenCategories } = storeToRefs(categoryStore);
const { articles } = storeToRefs(articlesStore);

const route = useRoute();
const routeForStore = ref([]);
const activePage = ref("");

const currentRouteParam = ref("");

onMounted(() => {
  if (route.params.product) {
    routeForStore.value = products.value;
    currentRouteParam.value = "product";
  }
  if (route.params.partner) {
    routeForStore.value = partners.value;
    currentRouteParam.value = "partner";
  }
  if (route.params.category) {
    routeForStore.value = flattenCategories.value;
    currentRouteParam.value = "category";
  }
  if (route.params.article) {
    routeForStore.value = articles.value;
    currentRouteParam.value = "article";
  }
  // TODO add information store
  if (route.params.information) {
    routeForStore.value = information.value;
    currentRouteParam.value = "information";
  }
  if (currentRouteParam.value) {
    activePage.value = routeForStore.value.find((el) => {
      return el.id === +route.params[currentRouteParam.value];
    }).title;
  }
});

watch(route, () => {
  if (currentRouteParam.value) {
    activePage.value = routeForStore.value.find((el) => {
      return el.id === +route.params[currentRouteParam.value];
    }).title;
  }
});
</script>

<template>
  <ul
    class="mb-[17px] mt-[12px] flex items-center gap-[40px] text-body14m text-neutral-60 lg:mt-0"
  >
    <li
      class="relative after:absolute after:-right-[20px] after:top-[5px] after:flex after:h-[9px] after:w-[5px] after:items-center after:justify-center after:bg-[url('~/icons/breadIcon.svg')] after:bg-cover after:bg-no-repeat"
    >
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li
      class="relative after:absolute after:-right-[20px] after:top-[5px] after:flex after:h-[9px] after:w-[5px] after:items-center after:justify-center after:bg-[url('~/icons/breadIcon.svg')] after:bg-cover after:bg-no-repeat last:after:hidden"
    >
      {{ activePage ? activePage : route.meta.title ? route.meta.title : null }}
    </li>
  </ul>
</template>
