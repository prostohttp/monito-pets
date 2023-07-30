import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useProductStore } from "@/stores/products";
import { mockCategories } from "@/api/mock/categories";

export const useCategoryStore = defineStore("category", () => {
  const productStore = useProductStore();
  const { exchangeRateProducts } = storeToRefs(productStore);

  const categories = ref(mockCategories);
  const productsByCategory = ref([]);
  const productsByCategoryCopy = ref([]);
  const flatten = ref([]);

  const flattenCategories = computed(() => {
    categories.value.map((cat1) => {
      if ("children" in cat1 && Array.isArray(cat1.children)) {
        cat1.children.map((cat2) => flatten.value.push(cat2));
        flatten.value.push(cat1);
      }
    });
    return flatten.value;
  });

  const productsByCategoryHandler = (catId) => {
    productsByCategory.value = exchangeRateProducts.value.filter((product) => {
      if (Array.isArray(product.categoryId)) {
      } else {
        return product.categoryId === +catId;
      }
    });
    productsByCategoryCopy.value = exchangeRateProducts.value.filter(
      (product) => {
        if (Array.isArray(product.categoryId)) {
        } else {
          return product.categoryId === +catId;
        }
      }
    );
  };

  const currentCategoryHandler = (id) => {
    return flattenCategories.value.find((category) => category.id === +id);
  };

  return {
    categories,
    flattenCategories,
    currentCategoryHandler,
    productsByCategoryHandler,
    productsByCategory,
    productsByCategoryCopy,
  };
});
