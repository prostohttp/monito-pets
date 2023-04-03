<script setup>
import closeIcon from "~/icons/close.svg";
import { onUnmounted, onMounted } from "vue";

const { isOpen, overflow } = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  overflow: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closeHandler"]);
const listener = (e) => {
  if (e.code === "Escape") {
    emit("closeHandler");
  }
};
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
  <template v-if="isOpen">
    <div
      class="fixed inset-0 w-screen h-screen bg-blue-dark/70 z-[999]"
      @click="emit('closeHandler')"
    ></div>
    <div
      class="fixed bg-white px-[40px] pb-[15px] pt-[50px] min-w-[320px] w-auto rounded-[16px] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[1000] shadow-dropDown overflow-y-auto max-h-[90%]"
    >
      <img
        :src="closeIcon"
        alt="close"
        class="absolute top-[16px] right-[16px] w-[30px] h-[30px] cursor-pointer"
        @click="emit('closeHandler')"
      />
      <slot />
    </div>
  </template>
</template>
