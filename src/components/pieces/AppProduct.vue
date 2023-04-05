<script setup>
import saleIcon from "~/icons/gift.svg";
import { useCurrencyStore } from "@/stores/currency";
import { storeToRefs } from "pinia";

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const currencyStore = useCurrencyStore();
const { currentCurrency } = storeToRefs(currencyStore);
const currencyFormat = (product) => {
  const code = currentCurrency.value.code;
  let locale;
  if (code === "ru") {
    locale = "ru-RU";
  } else if (code === "eu") {
    locale = "en-150";
  } else if (code === "us") {
    locale = "en-US";
  } else if (code === "vn") {
    locale = "en-US";
  }
  return (
    new Intl.NumberFormat(locale).format(product.options.price) +
    " " +
    currentCurrency.value.currency
  );
};
</script>

<template>
  <div
    class="basis-3/12 rounded-[12px] bg-neutral-0 px-[8px] pb-[20px] pt-[8px] shadow-product"
  >
    <router-link
      :to="{ name: 'product', params: { product: product.id } }"
      tag="div"
      class="flex flex-col gap-[16px]"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="aspect-square rounded-[12px] object-cover object-center"
      />
      <div class="flex flex-col gap-[4px] px-[8px]">
        <div class="text-body14b text-neutral-100 sm:text-body16b">
          {{ product.name }}
        </div>
        <div class="flex gap-[10px] text-body12m text-neutral-60">
          <div v-if="product.options.gender">
            Gene:
            <strong class="font-[700]">
              {{ product.options.gender }}
            </strong>
          </div>
          <span class="relative -top-[5px] hidden text-[22px] md:inline-block"
            >.</span
          >
          <div v-if="product.options.age">
            Age:
            <strong class="font-[700]">{{ product.options.age }}</strong>
          </div>
        </div>
        <div class="text-body16b text-neutral-100 sm:text-body14b">
          {{ currencyFormat(product) }}
        </div>
        <div
          v-if="product.sale"
          class="mt-[18px] flex w-full gap-[10px] rounded-[8px] bg-yellow/40 pb-[6px] pl-[15px] pt-[8px]"
        >
          <img :src="saleIcon" alt="sale icon" />
          <span class="flex gap-[10px] text-body14b text-blue-dark/80">
            <span class="relative -top-[5px] text-[22px]">.</span>
            {{ product.sale }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
