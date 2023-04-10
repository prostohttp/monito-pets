<script setup>
import { v4 as uuidv4 } from "uuid";

const { placeholder, label, icon, leftIcon, modelValue, relative } =
  defineProps({
    placeholder: String,
    label: String,
    icon: String,
    leftIcon: String,
    modelValue: {
      type: String,
    },
    relative: {
      type: Boolean,
    },
  });
const emit = defineEmits(["update:model-value"]);

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
      class="mb-[10px] block w-full text-[15px] font-[500] text-neutral-80"
      >{{ label }}
    </label>
  </template>
  <div class="w-full" :class="{ relative: relative }">
    <template v-if="leftIcon">
      <img
        :src="leftIcon"
        alt="icon"
        class="absolute left-[14px] top-1/2 -translate-y-1/2 cursor-pointer"
      />
    </template>
    <input
      :id="label ? id : null"
      :placeholder="placeholder"
      class="w-full border border-neutral-40 px-[28px] py-[14px] text-[15px] font-[500] leading-[20px] text-neutral-80 placeholder-neutral-40"
      v-bind="$attrs"
      :value="modelValue"
      @change="emit('update:model-value', $event.target.value)"
    />
    <template v-if="icon">
      <img
        :src="icon"
        alt="icon"
        class="absolute right-[14px] top-1/2 -translate-y-1/2"
    /></template>
  </div>
</template>
