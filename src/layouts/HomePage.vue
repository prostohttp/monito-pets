<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header>
    <template v-slot:banner>
      <h1>Banner</h1>
    </template>
  </Header>
  <slot />
  <Footer />
</template>
