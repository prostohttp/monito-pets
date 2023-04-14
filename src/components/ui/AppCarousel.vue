<script setup>
import { ref } from "vue";
import AppImageModal from "@/components/ui/AppImageModal.vue";

// vars
const { images } = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
const width = ref({
  desktop: 248 * images.length + 12 * (images.length - 1),
});
const isImageOpen = ref(false);
const activeImage = ref();
const activeImageId = ref(0);

// Handlers
const imageHandler = (index) => {
  activeImage.value = images[index];
  activeImageId.value = index;
  isImageOpen.value = !isImageOpen.value;
};
const nextImageHandler = () => {
  if (activeImageId.value < images.length - 1) {
    activeImageId.value++;
  }
};
const prevImageHandler = () => {
  if (activeImageId.value > 0) {
    activeImageId.value--;
  }
};
</script>

<template>
  <div class="overflow-x-auto">
    <ul
      class="flex touch-none touch-pan-x gap-[12px] pb-[20px] scrollbar-hide"
      :style="{ width: width.desktop + 'px' }"
    >
      <li
        v-for="(image, index) in images"
        class="w-[248px] cursor-pointer overflow-hidden rounded-[10px]"
        @click="imageHandler(index)"
      >
        <img
          :src="image"
          :alt="'customer' + index"
          class="z-0 object-cover object-center"
        />
      </li>
    </ul>
  </div>
  <teleport to="body">
    <AppImageModal
      :is-open="isImageOpen"
      @close-handler="isImageOpen = false"
      @next-handler="nextImageHandler"
      @prev-handler="prevImageHandler"
    >
      <img :src="images[activeImageId]" alt="customer" class="h-auto w-full" />
    </AppImageModal>
  </teleport>
</template>
