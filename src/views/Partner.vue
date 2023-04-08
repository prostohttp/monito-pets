<script setup>
import { useRoute } from "vue-router";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";

const route = useRoute();
</script>

<template>
  <div class="m-auto max-w-1180 px-[16px] xl:px-0">
    <TheBreadcrumb />
  </div>
</template>
