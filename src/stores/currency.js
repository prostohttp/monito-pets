import { defineStore } from "pinia";
import { ref } from "vue";
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
      well: 77,
    },
    {
      code: "eu",
      currency: "EUR",
      flag: eu,
      well: 0.92,
    },
    {
      code: "us",
      currency: "USD",
      flag: us,
      well: 1,
    },
    {
      code: "vn",
      currency: "VND",
      flag: vn,
      well: 90,
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

  return {
    currentCurrency,
    currencyList,
    setCurrentCurrency,
  };
});
