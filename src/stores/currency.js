import { defineStore } from "pinia";
import { computed, ref } from "vue";
import ru from "~/icons/ru.svg";
import eu from "~/icons/eu.svg";
import vn from "~/icons/vn.svg";
import us from "~/icons/us.svg";

export const useCurrencyStore = defineStore("currency", () => {
  const currencyList = ref([
    {
      code: "ru",
      currency: "RUB",
      flag: ru,
      well: 1,
    },
    {
      code: "eu",
      currency: "EUR",
      flag: eu,
      well: 0.011145,
    },
    {
      code: "us",
      currency: "USD",
      flag: us,
      well: 0.012168,
    },
    {
      code: "vn",
      currency: "VND",
      flag: vn,
      well: 285.47,
    },
  ]);

  const currentCurrency = ref(
    window.localStorage.getItem("currency")
      ? currencyList.value[+window.localStorage.getItem("currency")]
      : currencyList.value[0]
  );
  const setCurrentCurrency = (index) => {
    currentCurrency.value = currencyList.value[index];
  };
  const currentRate = computed(() => {
    return currencyList.value.find(
      (el) => el.code === currentCurrency.value.code
    )["well"];
  });

  return {
    currentRate,
    currentCurrency,
    currencyList,
    setCurrentCurrency,
  };
});
