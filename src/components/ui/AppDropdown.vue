<script setup>
import { ref } from "vue";
import iconUp from "~/icons/up.svg";
import iconDown from "~/icons/down.svg";

const { list } = defineProps({
  list: {
    type: Array,
  },
});
const selected = ref(list[0].value);
const listModifier = list[0].disabled ? list.slice(1, list.length) : list;
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const selectHandler = (item) => {
  selected.value = item;
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
    class="relative mb-[6px] text-neutral-60 inline-block"
    v-click-outside="clickOutside"
  >
    <div class="relative inline-block">
      <span
        class="inline-block w-[250px] pt-[10px] pb-[8px] pl-[20px] pr-[25px] border rounded-[20px] border-neutral-20 font-[500] text-[15px] cursor-pointer"
        :class="{ 'border-sea': isOpen }"
        @click="toggleMenu"
        >{{ selected }}</span
      >
      <transition name="fade">
        <template v-if="!isOpen">
          <img
            :src="iconDown"
            class="absolute -z-10 top-1/2 -translate-y-[50%] right-[20px]"
            :alt="selected"
          />
        </template>
        <template v-else>
          <img
            :src="iconUp"
            class="absolute -z-10 top-1/2 -translate-y-[50%] right-[20px]"
            :alt="selected"
          />
        </template>
      </transition>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute mt-[6px] top-full left-0 right-0 rounded-[16px] border border-neutral-20 bg-white w-[250px] z-50 py-[10px] shadow-dropDown"
      >
        <span
          v-for="item in listModifier"
          @click="selectHandler(item.value)"
          class="block pl-[20px] pr-[12px] pt-[10px] pb-[8px] cursor-pointer hover:text-neutral-60/60 transition-colors"
          >{{ item.value }}</span
        >
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
