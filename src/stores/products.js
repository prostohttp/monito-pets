import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import { productsList } from "@/api/mock/products";
import { flattenObject } from "@/helpers/functions";

export const useProductStore = defineStore("product", () => {
  const exchangeRate = [
    { code: "ru", rate: 1 },
    { code: "eu", rate: 0.0017 },
    { code: "us", rate: 0.0128 },
    { code: "vn", rate: 294.87 },
  ];
  const currencyStore = useCurrencyStore();
  const { currentCurrency } = storeToRefs(currencyStore);
  const initialProducts = ref(productsList);
  const currentRate = computed(() => {
    return exchangeRate.find((el) => el.code === currentCurrency.value.code)[
      "rate"
    ];
  });

  const products = computed(() => {
    return initialProducts.value.map((product) => flattenObject(product));
  });

  const exchangeRateProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        price: currentRate.value * product.price,
      };
    });
  });

  return {
    products,
    exchangeRateProducts,
  };
});
