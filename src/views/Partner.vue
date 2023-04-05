<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="m-auto max-w-1180 px-[16px] xl:px-0">
    {{ route.params.partner }}
  </div>
</template>
