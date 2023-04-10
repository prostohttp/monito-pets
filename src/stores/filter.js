import { defineStore, storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { useSortStore } from "@/stores/sort";

export const useFilterStore = defineStore("filter", () => {
  // stores
  const sortStore = useSortStore();
  const { sortedProducts } = storeToRefs(sortStore);
  // vars
  const male = ref(false);
  const female = ref(false);
  const red = ref(false);
  const apricot = ref(false);
  const black = ref(false);
  const blackAndWhite = ref(false);
  const silver = ref(false);
  const tan = ref(false);
  const white = ref(false);
  const min = ref("");
  const max = ref("");
  const small = ref(false);
  const medium = ref(false);
  const large = ref(false);
  const filters = ref({
    Male: male.value,
    Female: female.value,
    Red: red.value,
    Apricot: apricot.value,
    Black: black.value,
    "Black & White": blackAndWhite.value,
    Silver: silver.value,
    Tan: tan.value,
    Small: small.value,
    White: white.value,
    Medium: medium.value,
    Large: large.value,
  });
  const range = ref({
    min: min.value,
    max: max.value,
  });
  const filtered = ref([]);

  // handlers
  const checkboxHandler = () => {
    if (Object.values(filters.value).some((val) => val)) {
      filtered.value = filtered.value.filter((product) => {
        let inc = false;
        for (const val of Object.values(product)) {
          if (val in filters.value && filters.value[val]) {
            inc = true;
            break;
          }
        }
        return inc;
      });
    }
  };
  const rangeHandler = () => {
    if (Object.values(range.value).some((val) => val)) {
      const min = +range.value.min;
      const max = +range.value.max;
      if (range.value.min && !range.value.max) {
        filtered.value = filtered.value.filter((product) => {
          return product.price >= min;
        });
      } else if (!range.value.min && range.value.max) {
        filtered.value = filtered.value.filter(
          (product) => product.price <= max && product.price >= 1
        );
      } else if (range.value.min && range.value.max) {
        filtered.value = filtered.value.filter(
          (product) => product.price <= max && product.price >= min
        );
      }
    }
  };
  const filteredProducts = computed(() => {
    filtered.value = sortedProducts.value;
    checkboxHandler();
    rangeHandler();
    return filtered.value;
  });

  const resetFilters = () => {
    male.value = false;
    female.value = false;
    red.value = false;
    apricot.value = false;
    black.value = false;
    blackAndWhite.value = false;
    silver.value = false;
    tan.value = false;
    white.value = false;
    min.value = "";
    max.value = "";
    small.value = false;
    medium.value = false;
    large.value = false;
  };

  // Hooks
  watch(
    [
      male,
      female,
      red,
      apricot,
      black,
      blackAndWhite,
      silver,
      tan,
      white,
      min,
      max,
      small,
      medium,
      large,
    ],
    () => {
      range.value.max = max.value;
      range.value.min = min.value;
      filters.value.Male = male.value;
      filters.value.Female = female.value;
      filters.value.Red = red.value;
      filters.value.Apricot = apricot.value;
      filters.value.Black = black.value;
      filters.value["Black & White"] = blackAndWhite.value;
      filters.value.White = white.value;
      filters.value.Small = small.value;
      filters.value.Medium = medium.value;
      filters.value.Large = large.value;
      filters.value.Tan = tan.value;
      filters.value.Silver = silver.value;
    }
  );

  return {
    filteredProducts,
    filtered,
    filters,
    range,
    male,
    female,
    red,
    apricot,
    black,
    blackAndWhite,
    silver,
    tan,
    white,
    min,
    max,
    small,
    medium,
    large,
    resetFilters,
  };
});
