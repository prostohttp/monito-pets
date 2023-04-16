<script setup>
import { useField } from "vee-validate";
import * as Yup from "yup";
import "yup-phone-lite";
import AppDynamicForm from "@/components/ui/AppDynamicForm.vue";
import { ref } from "vue";

// Handlers
const submitFormHandler = (values, { resetForm }) => {
  resetForm({
    values: {
      name: "Mike Morozov",
    },
  });
};

// Vars
// const name = ref("");
// const { errorMessage, value, meta } = useField(
//   name,
//   Yup.string().required("обязательное поле").min(8, "Не менее 8 символов")
// );
const initialValues = {
  name: "Mikele Corleone",
};

const formSchema = {
  fields: [
    {
      placeholder: "Your Name *",
      name: "name",
      as: "input",
      type: "text",
      rules: Yup.string().min(3).required().label("Your Name"),
    },
    {
      placeholder: "Your Email *",
      name: "email",
      as: "input",
      type: "email",
      rules: Yup.string().email().required().label("Your Email"),
    },
    {
      placeholder: "Your Phone *",
      name: "phone",
      as: "input",
      type: "tel",
      rules: Yup.string()
        .phone("RU", "Please enter a valid phone number")
        .required("A phone number is required")
        .label("Your Phone"),
    },
    {
      placeholder: "",
      name: "date",
      as: "input",
      type: "date",
      rules: Yup.string().required().label("Date"),
    },
    {
      placeholder: "Your Message *",
      name: "message",
      as: "textarea",
      type: "",
      rules: Yup.string().min(10).max(300).required().label("Message"),
      classes: "h-[100px]",
    },
  ],
};
</script>

<template>
  <main class="mx-auto max-w-1180 py-[100px]">
    <AppDynamicForm
      :inital-values="initialValues"
      :schema="formSchema"
      :submit-handler="submitFormHandler"
      submit-text="Submit"
      class="m-auto max-w-[500px]"
    />

    <!--    <div>-->
    <!--      <input-->
    <!--        v-model="value"-->
    <!--        type="text"-->
    <!--        :class="{-->
    <!--          'bg-neutral-60 text-neutral-0 transition-all': errorMessage,-->
    <!--          'rounded-[10px] border-[green]': !errorMessage && meta.dirty,-->
    <!--        }"-->
    <!--      />-->
    <!--      <span>{{ errorMessage }} {{ meta }}</span>-->
    <!--    </div>-->
  </main>
</template>
