<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const { value, disabled } = defineProps({
  value: {
    type: String,
    required: false,
  },
  disabled: {
    validator: (value) => {
      return [true, false].includes(value);
    },
    require: false,
  },
});
const checkbox = ref(false);
const id = uuidv4();
</script>

<template>
  <div class="flex mb-[10px]">
    <label :for="id" class="flex gap-[12px] w-auto"
      ><input
        type="checkbox"
        v-model="checkbox"
        :name="value"
        :id="id"
        :value="value"
        class="hidden"
        :disabled="disabled"
      /><span
        class="w-[20px] h-[20px] block border rounded-[4px]"
        :class="{
          'bg-[url(~/icons/check.svg)] bg-blue-dark border-blue-dark': checkbox,
          'border-neutral-60': !checkbox,
          'border-neutral-60 bg-neutral-20': disabled === true,
        }"
      ></span
      >{{ value }}</label
    >
  </div>
</template>
