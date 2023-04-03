<script setup>
import { useSlots } from "vue";

const { leftIcon, rightIcon, centerIcon } = defineProps({
  leftIcon: {
    type: String,
  },
  rightIcon: {
    type: String,
  },
  centerIcon: {
    type: String,
  },
});
const slots = useSlots();
</script>

<template>
  <button
    class="rounded-[57px] flex gap-[8px] justify-around items-center transition-colors"
    :class="{
      'pt-[14px] pb-[12px] px-[24px] text-[16px] leading-[24px]': !centerIcon,
      'py-[14px] px-[14px]': centerIcon,
    }"
  >
    <template v-if="leftIcon">
      <img :src="leftIcon" alt="" />
    </template>
    <template v-if="!centerIcon">
      <slot />
    </template>
    <template v-else>
      <img :src="centerIcon" alt="" />
    </template>
    <template v-if="rightIcon">
      <img :src="rightIcon" alt="" />
    </template>
  </button>
</template>
