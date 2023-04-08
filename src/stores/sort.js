import { defineStore } from "pinia";
import { ref } from "vue";

export const useSortStore = defineStore("sort", () => {
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

  return { sortList, currentSortType, changeCurrentSortType };
});
