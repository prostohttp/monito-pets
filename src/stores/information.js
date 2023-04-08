import { defineStore } from "pinia";
import { ref } from "vue";

export const useInformationStore = defineStore("information", () => {
  const information = ref([
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Privacy Policy",
    },
    {
      id: 3,
      title: "Terms of Service",
    },
  ]);

  return { information };
});
