import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import { productsList } from "@/api/mock/products";

export const useProductStore = defineStore("product", () => {
  const exchangeRate = [
    { code: "ru", rate: 1 },
    { code: "eu", rate: 0.0017 },
    { code: "us", rate: 0.0128 },
    { code: "vn", rate: 294.87 },
  ];
  const currencyStore = useCurrencyStore();
  const { currentCurrency } = storeToRefs(currencyStore);
  const productsByCategory = ref([]);
  const products = ref(productsList);
  const currentRate = computed(() => {
    return exchangeRate.find((el) => el.code === currentCurrency.value.code)[
      "rate"
    ];
  });

  const exchangeRateProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        options: {
          ...product.options,
          price: currentRate.value * product.options.price,
        },
      };
    });
  });

  const productsByCategoryHandler = (catId) => {
    productsByCategory.value = exchangeRateProducts.value.filter((product) => {
      if (Array.isArray(product.categoryId)) {
      } else {
        return product.categoryId === +catId;
      }
    });
  };

  return {
    products,
    exchangeRateProducts,
    productsByCategoryHandler,
    productsByCategory,
  };
});
