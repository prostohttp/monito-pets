<script setup>
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
  leftInvertIcon: {
    type: Boolean,
  },
  centerInvertIcon: {
    type: Boolean,
  },
  rightInvertIcon: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    class="flex items-center justify-center gap-[8px] rounded-[57px] text-[16px] text-body16m leading-[24px] transition-colors"
    :class="{
      'px-[30px] pb-[8px] pt-[10px] ': !centerIcon,
      'px-[14px] py-[14px]': centerIcon,
    }"
  >
    <template v-if="leftIcon">
      <img
        :src="leftIcon"
        alt=""
        class="h-[15px] w-[15px]"
        :class="{ 'brightness-0 invert': leftInvertIcon }"
      />
    </template>
    <template v-if="!centerIcon">
      <slot />
    </template>
    <template v-else>
      <img
        :src="centerIcon"
        alt=""
        class="h-[15px] w-[15px]"
        :class="{ 'brightness-0 invert': centerInvertIcon }"
      />
    </template>
    <template v-if="rightIcon">
      <img
        :src="rightIcon"
        alt=""
        class="h-[15px] w-[15px]"
        :class="{ 'brightness-0 invert': rightInvertIcon }"
      />
    </template>
  </button>
</template>
