<script setup>
import { toRef } from "vue";
import arrowLeft from "~/icons/arrow-left.svg";
import arrowRight from "~/icons/arrow-right.svg";

// Stores

// Vars
const props = defineProps({
  perPage: {
    type: Number,
    required: false,
    default: 6,
  },
  activePage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["set-active-page"]);
const activePage = toRef(props, "activePage");

// Handlers
const backHandler = () => {
  if (activePage.value > 1) {
    emit("set-active-page", activePage.value - 1);
  }
};
const forwardHandler = () => {
  if (activePage.value < props.pageCount) {
    emit("set-active-page", activePage.value + 1);
  }
};

// Hooks
</script>

<template>
  <div
    class="flex items-center justify-center gap-[15px]"
    v-if="props.pageCount > 1"
  >
    <button @click="backHandler">
      <img :src="arrowLeft" alt="back" class="w-[30px]" />
    </button>
    <ul class="flex gap-[15px] text-[18px] font-bold leading-[24px]">
      <li
        v-for="index in props.pageCount"
        class="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] hover:cursor-pointer hover:bg-blue-dark hover:text-neutral-0"
        :class="{ 'bg-blue-dark text-neutral-0': index === activePage }"
        @click="emit('set-active-page', index)"
      >
        {{ index }}
      </li>
    </ul>
    <button @click="forwardHandler">
      <img :src="arrowRight" alt="forward" class="w-[30px]" />
    </button>
  </div>
</template>
