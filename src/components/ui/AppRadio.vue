<script setup>
import { ref } from "vue";

const { list } = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
const radio = ref("");
</script>

<template>
  <div class="flex mb-[10px]" v-for="item in list">
    <label class="flex gap-[12px] w-auto"
      ><input
        type="radio"
        v-model="radio"
        :value="item.value"
        class="hidden"
        :disabled="item.disabled"
      /><span
        class="w-[20px] h-[20px] block border rounded-big"
        :class="{
          'border-blue-dark border-[6px]': radio === item.value,
          'border-neutral-60': radio !== item.value,
          'border-neutral-60 bg-neutral-20': item.disabled === true,
        }"
      ></span
      >{{ item.value }}</label
    >
  </div>
</template>
