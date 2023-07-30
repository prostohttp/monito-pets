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
  <div class="mb-[10px] flex" v-for="item in list">
    <label class="flex w-auto gap-[12px]"
      ><input
        type="radio"
        v-model="radio"
        :value="item.value"
        class="hidden"
        :disabled="item.disabled"
      /><span
        class="block h-[20px] w-[20px] rounded-big border"
        :class="{
          'border-[6px] border-blue-dark': radio === item.value,
          'border-neutral-60': radio !== item.value,
          'border-neutral-60 bg-neutral-20': item.disabled === true,
        }"
      ></span
      >{{ item.value }}</label
    >
  </div>
</template>
