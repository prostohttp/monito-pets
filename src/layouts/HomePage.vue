<script setup>
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";
import mobileLogoBg from "~/images/mobile-logo-bg.svg";
</script>

<template>
  <Header>
    <template v-slot:banner>
      <div
        class="absolute left-0 top-0 w-full rounded-bl-[20px] rounded-br-[20px] bg-bgFooter pt-[150px]"
      >
        <div class="absolute md:hidden"></div>
        <div class="m-auto flex max-w-1180 justify-between">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur cupiditate debitis dolor doloribus eligendi esse ex
            exercitationem expedita fugiat in laboriosam libero maiores nemo
            nihil, obcaecati reiciendis repudiandae, rerum sint? Accusamus
            accusantium, at deleniti dolor dolorum exercitationem fuga, id,
            minima non quae quaerat rerum vero voluptates. Debitis doloribus
            eveniet, laborum minus necessitatibus odio odit perferendis
            recusandae repudiandae, similique tempore voluptas. Delectus eius
            eligendi fugit magni nostrum. Accusantium aliquam aspernatur
            corporis debitis deleniti dicta distinctio dolor dolorem enim illo
            libero minus natus non pariatur praesentium quam, repudiandae ullam
            veniam, voluptatibus voluptatum. A at autem cupiditate debitis dicta
            dolore quas quis voluptatem?
          </div>
          <div>2</div>
        </div>
      </div>
    </template>
  </Header>
  <slot />
  <Footer />
</template>
