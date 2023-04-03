<script setup>
import { ref } from "vue";
import up from "~/icons/up.svg";
import down from "~/icons/down.svg";

const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <span
    @click="isOpen = !isOpen"
    class="flex gap-[5px] justify-between cursor-pointer"
    v-bind="$attrs"
  >
    {{ title }}
    <img :src="down" v-if="!isOpen" alt="icon" class="w-[12px]" />
    <img :src="up" v-else alt="icon" class="w-[12px]" />
  </span>
  <transition name="fade">
    <template v-if="isOpen">
      <slot />
    </template>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
