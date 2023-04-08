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
  image: {
    type: String,
    required: false,
  },
});
const checkbox = ref(false);
const id = uuidv4();
</script>

<template>
  <div class="mb-[10px] flex">
    <label :for="id" class="flex w-auto gap-[12px]">
      <input
        type="checkbox"
        v-model="checkbox"
        :name="value"
        :id="id"
        :value="value"
        class="hidden"
        :disabled="disabled"
      />
      <span
        class="block h-[20px] w-[20px] rounded-[4px] border"
        :class="{
          'border-blue-dark bg-blue-dark bg-[url(~/icons/check.svg)]': checkbox,
          'border-neutral-60': !checkbox,
          'border-neutral-60 bg-neutral-20': disabled === true,
        }"
      >
      </span>
      <span v-if="image"
        ><img :src="image" :alt="value" /><span>{{ value }}</span></span
      >
      <template v-else>{{ value }}</template>
    </label>
  </div>
</template>
