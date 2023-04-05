<script setup>
import { ref } from "vue";
import AppCheckbox from "@/components/ui/AppCheckbox.vue";
import Input from "@/components/ui/AppInput.vue";
import eye from "~/icons/eye.svg";
import left from "~/icons/play-light.svg";
import Radio from "@/components/ui/AppRadio.vue";
import AppDropdown from "@/components/ui/AppDropdown.vue";
import Button from "@/components/ui/AppButton.vue";
import Modal from "@/components/ui/AppModal.vue";

const checkboxList = [
  { value: "Понедельник" },
  { value: "Вторник", disabled: true },
  {},
];
const radioList = [
  { value: "Понедельник" },
  { value: "Воскресенье", disabled: true },
  {},
];
const dropdownList = [
  { value: "Выберите вариант", disabled: true },
  { value: "Понедельник" },
  { value: "Вторник" },
  { value: "Среда" },
  { value: "Четверг" },
  { value: "Пятница" },
  { value: "Суббота" },
  { value: "Воскресенье" },
];
const click = () => window.open("https://vk.com", "_blank");
const isOpen = ref(false);
</script>

<template>
  <main class="mx-auto max-w-1180">
    <h1></h1>
    <h6 class="text-center text-head36m">Elements</h6>
    <AppCheckbox
      v-for="input in checkboxList"
      :value="input.value"
      :disabled="input.disabled"
    />

    <Input placeholder="Your name*" label="Name*" :icon="eye" class="" />

    <h6>Radio</h6>
    <Radio :list="radioList"></Radio>

    <h6>Dropdown menu</h6>
    <AppDropdown :list="dropdownList"></AppDropdown>

    <h6>Buttons</h6>
    <Button class="bg-blue-dark text-white">Click here</Button>
    <Button :left-icon="left" class="bg-blue-dark text-white"
      >Click here
    </Button>
    <Button :right-icon="left" class="bg-sea text-white">Click here</Button>
    <Button :right-icon="left" :left-icon="left" class="bg-sea text-white"
      ><a href="#">Click here</a></Button
    >
    <Button :center-icon="left" class="bg-sea" @click="click"></Button>

    <h6>Modal window</h6>
    <Button
      :right-icon="left"
      class="bg-sea text-white"
      @click="isOpen = !isOpen"
      >Open modal
    </Button>
    <teleport to="body">
      <transition name="fade">
        <div v-if="isOpen">
          <Modal
            :isOpen="isOpen"
            @close-handler="isOpen = !isOpen"
            :overflow="true"
          >
            <h6 class="mt-0">Checkbox</h6>
            <AppCheckbox
              v-for="input in dropdownList"
              :value="input.value"
              :disabled="input.disabled"
            ></AppCheckbox>
          </Modal>
        </div>
      </transition>
    </teleport>
  </main>
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
