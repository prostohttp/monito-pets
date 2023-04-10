import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCategoryStore } from "@/stores/category";

export const useSortStore = defineStore("sort", () => {
  const categoryStore = useCategoryStore();
  const { productsByCategory, productsByCategoryCopy } =
    storeToRefs(categoryStore);
  const sortList = ref([
    { value: "Default" },
    { value: "Name ASC" },
    { value: "Name DESC" },
    { value: "Price ASC" },
    { value: "Price DESC" },
  ]);
  const currentSortType = ref(sortList.value[0].value);
  const changeCurrentSortType = (type) => {
    currentSortType.value = type;
  };
  const sortedProducts = computed(() => {
    if (productsByCategory.value.length > 1) {
      if (currentSortType.value === sortList.value[1].value) {
        productsByCategory.value.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      } else if (currentSortType.value === sortList.value[2].value) {
        productsByCategory.value.sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      } else if (currentSortType.value === sortList.value[3].value) {
        productsByCategory.value.sort((a, b) => a.price - b.price);
      } else if (currentSortType.value === sortList.value[4].value) {
        productsByCategory.value.sort((a, b) => b.price - a.price);
      } else {
        return productsByCategoryCopy.value;
      }
    }

    return productsByCategory.value;
  });

  return {
    sortList,
    currentSortType,
    changeCurrentSortType,
    sortedProducts,
  };
});
