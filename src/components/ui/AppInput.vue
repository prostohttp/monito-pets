<script setup>
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

const { placeholder, label, icon, leftIcon } = defineProps({
  placeholder: String,
  label: String,
  icon: String,
  leftIcon: String,
});
const input = ref("");
const id = uuidv4();
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <template v-if="label">
    <label
      :for="id"
      class="w-full text-neutral-80 text-[15px] font-[500] mb-[10px] block"
      >{{ label }}
    </label>
  </template>
  <div class="w-full">
    <template v-if="leftIcon">
      <img
        :src="leftIcon"
        alt="icon"
        class="absolute top-1/2 left-[14px] -translate-y-1/2 cursor-pointer"
      />
    </template>
    <input
      :id="label ? id : null"
      :placeholder="placeholder"
      class="py-[14px] px-[28px] border border-neutral-40 text-neutral-80 placeholder-neutral-40 text-[15px] leading-[20px] font-[500] w-full"
      v-bind="$attrs"
      v-model="input"
    />
    <template v-if="icon">
      <img
        :src="icon"
        alt="icon"
        class="absolute top-1/2 right-[14px] -translate-y-1/2 cursor-pointer"
    /></template>
  </div>
</template>
