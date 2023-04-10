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
  const filters = ref([]);
  const range = ref({
    min: {
      value: min.value,
    },
    max: {
      value: max.value,
    },
  });
  // handlers
  const addFilterHandler = (f) => {
    filters.value = f;
  };
  const priceRangeHandler = (p) => {
    range.value = p;
  };
  const filteredProducts = computed(() => {
    if (filters.value.length) {
      let inc = false;
      return sortedProducts.value.filter((product) => {
        for (const value of Object.values(product)) {
          inc = filters.value.includes(value);
          if (inc) break;
        }
        return inc;
      });
    } else {
      return sortedProducts.value;
    }
  });

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
      filters.value = [
        male.value ? "Male" : null,
        female.value ? "Female" : null,
        red.value ? "Red" : null,
        apricot.value ? "Apricot" : null,
        black.value ? "Black" : null,
        blackAndWhite.value ? "Black & White" : null,
        silver.value ? "Silver" : null,
        tan.value ? "Tan" : null,
        small.value ? "Small" : null,
        medium.value ? "Medium" : null,
        large.value ? "Large" : null,
      ].filter((el) => el);

      range.value.min.value = min.value;
      range.value.max.value = max.value;
      // addFilterHandler(
      //   [
      //     male.value ? "Male" : null,
      //     female.value ? "Female" : null,
      //     red.value ? "Red" : null,
      //     apricot.value ? "Apricot" : null,
      //     black.value ? "Black" : null,
      //     blackAndWhite.value ? "Black & White" : null,
      //     silver.value ? "Silver" : null,
      //     tan.value ? "Tan" : null,
      //     small.value ? "Small" : null,
      //     medium.value ? "Medium" : null,
      //     large.value ? "Large" : null,
      //   ].filter((el) => el)
      // );
      // priceRangeHandler({
      //   min: {
      //     value: min.value ? +min.value : null,
      //   },
      //   max: {
      //     value: max.value ? +max.value : null,
      //   },
      // });
    }
  );

  return {
    filteredProducts,
    addFilterHandler,
    filters,
    range,
    priceRangeHandler,
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
  };
});
