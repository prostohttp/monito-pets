import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import partner1 from "~/images/partners-1.png";
import partner2 from "~/images/partners-2.png";
import partner3 from "~/images/partners-3.png";
import partner4 from "~/images/partners-4.png";
import partner5 from "~/images/partners-5.png";
import partner6 from "~/images/partners-6.png";
import partner7 from "~/images/partners-7.png";

export const usePartnersStore = defineStore("partners", () => {
  const partners = ref([
    {
      id: uuidv4(),
      name: "Sheba",
      picture: partner1,
    },
    {
      id: uuidv4(),
      name: "Whiskas",
      picture: partner2,
    },
    {
      id: uuidv4(),
      name: "Bakers",
      picture: partner3,
    },
    {
      id: uuidv4(),
      name: "Felix",
      picture: partner4,
    },
    {
      id: uuidv4(),
      name: "Good boy",
      picture: partner5,
    },
    {
      id: uuidv4(),
      name: "Butcher's",
      picture: partner6,
    },
    {
      id: uuidv4(),
      name: "Pedigree",
      picture: partner7,
    },
  ]);

  return {
    partners,
  };
});
