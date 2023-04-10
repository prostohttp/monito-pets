<script setup>
import { v4 as uuidv4 } from "uuid";

const { value, disabled } = defineProps({
  value: {
    type: String,
    required: true,
  },
  disabled: {
    validator: (value) => {
      return [true, false].includes(value);
    },
    require: false,
  },
  image: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Boolean,
  },
});
const emit = defineEmits(["update:model-value"]);
const id = uuidv4();
</script>

<template>
  <div class="mb-[10px] flex">
    <label :for="id" class="flex w-auto gap-[12px]">
      <input
        type="checkbox"
        :name="value"
        :id="id"
        class="hidden"
        :disabled="disabled"
        :checked="modelValue"
        @input="emit('update:model-value', $event.target.checked)"
      />
      <span
        class="block h-[20px] w-[20px] rounded-[4px] border"
        :class="{
          'border-blue-dark bg-blue-dark bg-[url(~/icons/check.svg)]':
            modelValue,
          'border-neutral-60': !modelValue,
          'border-neutral-60 bg-neutral-20': disabled === true,
        }"
      >
      </span>
      <span v-if="image" class="flex items-center gap-[10px]">
        <img :src="image" :alt="value" />
        <span>{{ value }}</span>
      </span>
      <template v-else>{{ value }}</template>
    </label>
  </div>
</template>
