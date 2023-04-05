import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([
    {
      id: uuidv4(),
      title: "Popular",
      to: "/category/popular",
      children: [
        { id: uuidv4(), title: "Yorkshire Terrier", to: "/category" },
        { id: uuidv4(), title: "Pug", to: "/category" },
        { id: uuidv4(), title: "Cocker Spaniel", to: "/category" },
        { id: uuidv4(), title: "Jack Russell Terrier", to: "/category" },
        { id: uuidv4(), title: "Beagle", to: "/category" },
        { id: uuidv4(), title: "Husky", to: "/category" },
        { id: uuidv4(), title: "Samoyed", to: "/category" },
        { id: uuidv4(), title: "Labrador", to: "/category" },
        { id: uuidv4(), title: "Tosa", to: "/category" },
        { id: uuidv4(), title: "Dachshund", to: "/category" },
        { id: uuidv4(), title: "French Bulldog", to: "/category" },
        { id: uuidv4(), title: "Chihuahua", to: "/category" },
      ],
    },
    {
      id: uuidv4(),
      title: "Large Dog",
      to: "/category/large-dog",
      children: [
        { id: uuidv4(), title: "Akita", to: "/category" },
        { id: uuidv4(), title: "Alaskan Malamute", to: "/category" },
        { id: uuidv4(), title: "Bernese Moutain", to: "/category" },
        { id: uuidv4(), title: "Bloodhound", to: "/category" },
        { id: uuidv4(), title: "Bullmastiff Terrier", to: "/category" },
        { id: uuidv4(), title: "Cane Corso", to: "/category" },
      ],
    },
    {
      id: uuidv4(),
      title: "Small Dog",
      to: "/category/large-dog",
      children: [
        { id: uuidv4(), title: "Beagle", to: "/category" },
        { id: uuidv4(), title: "Boston Terrier", to: "/category" },
        { id: uuidv4(), title: "Calm Terrier", to: "/category" },
        { id: uuidv4(), title: "Chihuahua", to: "/category" },
        { id: uuidv4(), title: "Cocker Spaniel", to: "/category" },
        { id: uuidv4(), title: "Dachshund", to: "/category" },
      ],
    },
  ]);

  return {
    categories,
  };
});
