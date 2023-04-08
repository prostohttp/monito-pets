<script setup>
import { ref } from "vue";
import iconUp from "~/icons/up.svg";
import iconDown from "~/icons/down.svg";

const { list } = defineProps({
  list: {
    type: Array,
  },
  selected: {
    type: String,
  },
});
const emit = defineEmits(["select-handler"]);
const listModifier = list[0].disabled ? list.slice(1, list.length) : list;
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const selectHandler = (item) => {
  emit("select-handler", item);
  isOpen.value = !isOpen.value;
};
const clickOutside = () => {
  if (isOpen.value) {
    isOpen.value = !isOpen.value;
  }
};
</script>

<template>
  <div
    class="relative inline-block text-neutral-60"
    v-click-outside="clickOutside"
  >
    <div class="relative inline-block">
      <span
        class="inline-block w-[172px] cursor-pointer rounded-[20px] border border-neutral-20 pb-[8px] pl-[20px] pr-[25px] pt-[10px] text-[15px] font-[500]"
        :class="{ 'border-sea': isOpen }"
        @click="toggleMenu"
        >{{ selected }}</span
      >
      <transition name="fade">
        <template v-if="!isOpen">
          <img
            :src="iconDown"
            class="absolute right-[20px] top-1/2 -z-10 -translate-y-[50%]"
            :alt="selected"
          />
        </template>
        <template v-else>
          <img
            :src="iconUp"
            class="absolute right-[20px] top-1/2 -z-10 -translate-y-[50%]"
            :alt="selected"
          />
        </template>
      </transition>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute left-0 right-0 top-full z-50 mt-[6px] w-[172px] rounded-[16px] border border-neutral-20 bg-white py-[10px] shadow-dropDown"
      >
        <span
          v-for="item in listModifier"
          @click="selectHandler(item.value)"
          class="block cursor-pointer pb-[8px] pl-[20px] pr-[12px] pt-[10px] transition-colors hover:text-neutral-60/60"
        >
          {{ item.value }}
        </span>
      </div>
    </transition>
  </div>
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
