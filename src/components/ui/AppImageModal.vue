<script setup>
import { onUnmounted, onMounted } from "vue";
import closeIcon from "~/icons/close-white.svg";
import nextIcon from "~/icons/forward.svg";
import prevIcon from "~/icons/back.svg";

const { isOpen, overflow } = defineProps({
  // vars
  isOpen: {
    type: Boolean,
    required: true,
  },
  overflow: {
    type: Boolean,
    default: false,
  },
  activeImageId: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["closeHandler", "nextHandler", "prevHandler"]);

// Handlers
const listener = (e) => {
  if (e.code === "Escape") {
    emit("closeHandler");
  }
};

// Hooks
onMounted(() => {
  document.addEventListener("keyup", listener);
  if (overflow) {
    document.body.classList.add("overflow-hidden");
  }
});
onUnmounted(() => {
  document.removeEventListener("keyup", listener);
  document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <div v-if="isOpen" class="absolute h-screen w-screen">
    <img
      v-show="activeImageId > 0"
      :src="prevIcon"
      alt="prev"
      class="fixed left-0 top-1/2 z-[1002] h-[30px] w-[30px] cursor-pointer rounded-full sm:left-[16px]"
      @click="emit('prevHandler')"
    />
    <img
      v-show="activeImageId < length"
      :src="nextIcon"
      alt="next"
      class="fixed right-0 top-1/2 z-[1002] h-[30px] w-[30px] cursor-pointer rounded-full sm:right-[16px]"
      @click="emit('nextHandler')"
    />
    <div class="fixed inset-0 z-[1001] h-full w-full bg-blue-dark/70">
      <img
        :src="closeIcon"
        alt="close"
        class="absolute right-[16px] top-[16px] h-[30px] w-[30px] cursor-pointer rounded-full"
        @click="emit('closeHandler')"
      />
    </div>
    <div
      class="fixed left-1/2 top-1/2 z-[1002] max-h-[99%] w-10/12 min-w-[320px] -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-[30px] bg-transparent p-0 shadow-dropDown md:w-auto md:min-w-[600px]"
    >
      <slot />
    </div>
  </div>
</template>
