import { defineStore } from "pinia";
import { ref } from "vue";
import ru from "~/icons/ru.svg";
import eu from "~/icons/eu.svg";
import vn from "~/icons/vn.svg";
import us from "~/icons/us.svg";

export const useCurrencyStore = defineStore("currency", () => {
  const currencyList = ref([
    {
      currency: "RUB",
      flag: ru,
    },
    {
      currency: "EUR",
      flag: eu,
    },
    {
      currency: "USD",
      flag: us,
    },
    {
      currency: "VND",
      flag: vn,
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
