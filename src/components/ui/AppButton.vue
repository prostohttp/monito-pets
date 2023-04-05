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
    class="flex items-center justify-center gap-[8px] rounded-[57px] text-body16m transition-colors"
    :class="{
      'px-[30px] pb-[8px] pt-[10px] text-[16px] leading-[24px]': !centerIcon,
      'px-[14px] py-[14px]': centerIcon,
    }"
  >
    <template v-if="leftIcon">
      <img :src="leftIcon" alt="" class="h-[15px] w-[15px]" />
    </template>
    <template v-if="!centerIcon">
      <slot />
    </template>
    <template v-else>
      <img :src="centerIcon" alt="" class="h-[15px] w-[15px]" />
    </template>
    <template v-if="rightIcon">
      <img :src="rightIcon" alt="" class="h-[15px] w-[15px]" />
    </template>
  </button>
</template>
