<script setup>
import { Form as VeeForm } from "vee-validate";
import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

const {} = defineProps({
  submitText: {
    type: String,
    required: false,
    default: "Send",
  },
  schema: {
    type: Object,
    required: true,
  },
  submitHandler: {
    type: Function,
    required: true,
  },
  validator: {
    type: Function,
    required: false,
  },
  initialValues: {
    type: Object,
    required: false,
  },
});

defineOptions({
  inheritAttrs: false
})

</script>

<template>
  <div>
    <VeeForm
      v-bind="$attrs"
      @submit="submitHandler"
      class="flex flex-col gap-[15px]"
      v-slot="{ meta }"
      :initial-values="initialValues"
    >
      <div v-for="field in schema.fields" :key="field.name">
        <label v-if="field.label" :for="field.name">{{ field.label }}</label>
        <AppInput
          :tag-name="field.as"
          :id="field.name"
          :name="field.name"
          :placeholder="field.placeholder"
          :type="field.type"
          :rules="field.rules"
          class="w-full rounded-[8px] border border-neutral-40 px-[28px] py-[14px] text-[15px] font-[500] leading-[20px] text-neutral-80 placeholder-neutral-40"
          :class="field.classes"
        />
        <!--        <ErrorMessage as="span" :name="field.name" />-->
      </div>
      <AppButton
        class="flex items-center justify-center gap-[8px] rounded-[57px] bg-blue-black px-[30px] py-[10px] pb-[15px] pt-[15px] text-[16px] uppercase leading-[24px] text-neutral-0 transition-colors disabled:bg-neutral-20"
        :disabled="!meta.valid"
      >
        {{ submitText }}
      </AppButton>
    </VeeForm>
  </div>
</template>
