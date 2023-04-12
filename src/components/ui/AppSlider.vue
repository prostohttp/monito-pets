<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import backIcon from "~/icons/back.svg";
import forwardIcon from "~/icons/forward.svg";

// vars
const { thumbs, alt } = defineProps({
  thumbs: {
    type: Array,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
const width = ref({
  mobile: 67 * thumbs.length + 12 * (thumbs.length - 1),
  desktop: 94 * thumbs.length + 12 * (thumbs.length - 1),
});
const activeThumb = ref(0);
const route = useRoute();

// handlers
const backHandler = () => {
  if (activeThumb.value) {
    activeThumb.value--;
  }
};
const forwardHandler = () => {
  if (activeThumb.value < thumbs.length - 1) {
    activeThumb.value++;
  }
};

// Hooks
watch(route, () => {
  activeThumb.value = 0;
});
</script>

<template>
  <div>
    <div class="overflow-hidden lg:rounded-[10px]">
      <transition name="fade" mode="out-in">
        <div
          class="relative aspect-[560/476] overflow-hidden"
          :key="thumbs[activeThumb]"
        >
          <a
            class="absolute left-[16px] top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
            :class="activeThumb === 0 ? 'bg-neutral-20' : 'bg-blue-dark'"
            @click="backHandler"
          >
            <img :src="backIcon" alt="back" />
          </a>

          <img
            :src="thumbs[activeThumb]"
            :alt="alt || 'image'"
            class="overflow-hidden object-cover object-center"
          />

          <a
            class="absolute right-[16px] top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full"
            :class="
              activeThumb < thumbs.length - 1 ? 'bg-blue-dark' : 'bg-neutral-20'
            "
            @click="forwardHandler"
          >
            <img
              :src="forwardIcon"
              alt="forward"
              class="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </a>
        </div>
      </transition>
    </div>
    <div class="overflow-x-auto pl-[16px] lg:pl-0">
      <ul
        class="mt-[9px] flex touch-pan-x snap-x gap-[12px] scrollbar-hide lg:hidden"
        :style="{ width: width.mobile + 'px' }"
      >
        <li
          v-for="(thumb, index) in thumbs"
          class="w-[67px] cursor-pointer overflow-hidden rounded-[4px]"
          :class="{
            'border-[3px] border-yellow-medium': activeThumb === index,
          }"
          @click="activeThumb = index"
        >
          <img :src="thumb" :alt="alt" class="object-cover object-center" />
        </li>
      </ul>
      <ul
        class="mt-[9px] hidden touch-pan-x snap-x gap-[12px] pb-[20px] scrollbar-hide lg:flex"
        :style="{ width: width.desktop + 'px' }"
      >
        <li
          v-for="(thumb, index) in thumbs"
          class="h-[94px] w-[94px] cursor-pointer overflow-hidden rounded-[4px]"
          :class="{
            'border-[3px] border-yellow-medium': activeThumb === index,
          }"
          @click="activeThumb = index"
          :key="thumb"
        >
          <img :src="thumb" :alt="alt" class="object-cover object-center" />
        </li>
      </ul>
    </div>
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
