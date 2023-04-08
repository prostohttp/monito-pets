<script setup>
import arrowLeft from "~/icons/arrow-left.svg";
import arrowRight from "~/icons/arrow-right.svg";
import { ref } from "vue";

const pages = ref([
  {
    title: "1",
    active: true,
  },
  {
    title: "2",
    active: false,
  },
  {
    title: "3",
    active: false,
  },
  {
    title: "...",
    active: false,
  },
  {
    title: "28",
    active: false,
  },
]);
</script>

<template>
  <div class="flex items-center justify-center gap-[15px]">
    <button><img :src="arrowLeft" alt="back" class="w-[30px]" /></button>
    <ul class="flex gap-[15px] text-[18px] font-bold leading-[24px]">
      <li
        v-for="page in pages"
        class="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] hover:cursor-pointer hover:bg-blue-dark hover:text-neutral-0"
        :class="{ 'bg-blue-dark text-neutral-0': page.active }"
      >
        {{ page.title }}
      </li>
    </ul>
    <button><img :src="arrowRight" alt="forward" class="w-[30px]" /></button>
  </div>
</template>
