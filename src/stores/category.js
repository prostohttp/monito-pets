import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([
    {
      id: 1,
      title: "Popular",
      to: "/category/popular",
      children: [
        { id: 2, title: "Yorkshire Terrier" },
        { id: 3, title: "Pug" },
        { id: 4, title: "Cocker Spaniel" },
        { id: 5, title: "Jack Russell Terrier" },
        { id: 6, title: "Beagle" },
        { id: 7, title: "Husky" },
        { id: 8, title: "Samoyed" },
        { id: 9, title: "Labrador" },
        { id: 10, title: "Tosa" },
        { id: 11, title: "Dachshund" },
        { id: 12, title: "French Bulldog" },
        { id: 13, title: "Chihuahua" },
      ],
    },
    {
      id: 14,
      title: "Large Dog",
      to: "/category/large-dog",
      children: [
        { id: 15, title: "Akita" },
        { id: 16, title: "Alaskan Malamute" },
        { id: 17, title: "Bernese Moutain" },
        { id: 18, title: "Bloodhound" },
        { id: 19, title: "Bullmastiff Terrier" },
        { id: 20, title: "Cane Corso" },
      ],
    },
    {
      id: 21,
      title: "Small Dog",
      to: "/category/small-dog",
      children: [
        { id: 22, title: "Beagle" },
        { id: 23, title: "Boston Terrier" },
        { id: 24, title: "Calm Terrier" },
        { id: 25, title: "Chihuahua" },
        { id: 26, title: "Cocker Spaniel" },
        { id: 27, title: "Dachshund" },
      ],
    },
  ]);
  const flatten = ref([]);

  const flattenCategories = computed(() => {
    categories.value.map((cat1) => {
      if ("children" in cat1 && Array.isArray(cat1.children)) {
        cat1.children.map((cat2) => flatten.value.push(cat2));
        // delete cat1["children"];
        flatten.value.push(cat1);
      }
    });
    return flatten.value;
  });

  const currentCategoryHandler = (id) => {
    return flattenCategories.value.find((category) => category.id === +id);
  };

  return {
    categories,
    flattenCategories,
    currentCategoryHandler,
  };
});
