<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import { useCurrencyStore } from "@/stores/currency";
import { onMounted, ref, watch } from "vue";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";
import AppSlider from "@/components/ui/AppSlider.vue";
import { currencyFormat } from "@/helpers/functions";
import AppButton from "@/components/ui/AppButton.vue";
import chatIcon from "~/icons/chat.png";
import shareIcon from "~/icons/share.svg";
import saledogIcon from "~/icons/sale-dog.svg";
import saledog2Icon from "~/icons/sale-dog-2.svg";
import fbGreyIcon from "~/icons/fb-grey.svg";
import twGreyIcon from "~/icons/tw-grey.svg";
import instGreyIcon from "~/icons/inst-grey.svg";
import ytGreyIcon from "~/icons/yt-grey.svg";
import c1 from "~/images/c1.png";
import c2 from "~/images/c2.png";
import c3 from "~/images/c3.png";
import c4 from "~/images/c4.png";
import c5 from "~/images/c5.png";
import c6 from "~/images/c6.png";
import c7 from "~/images/c7.png";
import AppProductsGrid from "@/components/pieces/AppProductsGrid.vue";
import AppCarousel from "@/components/ui/AppCarousel.vue";
import AppModal from "@/components/ui/AppModal.vue";
import AppInput from "@/components/ui/AppInput.vue";
import { Form as VeeForm, ErrorMessage } from "vee-validate";
import AppDynamicForm from "@/components/ui/AppDynamicForm.vue";
import * as Yup from "yup";
import "yup-phone-lite";

// Stores
const productStore = useProductStore();
const currencyStore = useCurrencyStore();
const { currentCurrency } = storeToRefs(currencyStore);
const { setProduct } = productStore;
const { exchangeRateProducts, product } = storeToRefs(productStore);
// Vars
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
      placeholder: "Your Message *",
      name: "message",
      as: "textarea",
      type: "",
      rules: Yup.string().min(10).max(300).required().label("Message"),
      classes: "h-[100px]",
    },
  ],
};
const route = useRoute();
const isOpen = ref(false);
const isContact = ref(false);

// Handlers
const submitContactHandler = (values, { resetForm }) => {
  console.info(values);
  resetForm();
};
//Hooks
onMounted(() => {
  setProduct(route.params.product);
});
watch(
  [currentCurrency, route],
  () => {
    setProduct(route.params.product);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <main class="m-auto max-w-1180 lg:px-[16px] xl:px-0">
    <section
      class="product flex flex-col gap-[20px] rounded-[20px] lg:flex-row lg:gap-[34px] lg:border lg:border-neutral-10 lg:px-[20px] lg:py-[22px]"
    >
      <div class="left lg:w-1/2 lg:grow-0">
        <AppSlider
          class="mb-[20px]"
          :thumbs="product.images"
          :alt="product.title"
        />
        <div
          v-if="product.sale"
          class="flex-crow mb-[25px] hidden gap-[17px] rounded-[10px] bg-bgFooter px-[12px] py-[14px] text-body14b lg:flex"
        >
          <div class="flex items-center gap-[9px]">
            <img :src="saledogIcon" alt="sale" />
            <span>100% health guarantee for pets</span>
          </div>
          <div class="flex items-center gap-[9px]">
            <img :src="saledog2Icon" alt="sale" />
            <span>100% guarantee of pet identification</span>
          </div>
        </div>
        <div class="hidden gap-[21px] lg:flex">
          <div class="flex items-center gap-[5px]">
            <img :src="shareIcon" alt="share" />
            <span class="text-body14b">Share:</span>
          </div>
          <div class="flex items-center justify-center gap-[15px]">
            <a href="#" target="_blank"
              ><img :src="fbGreyIcon" alt="facebook"
            /></a>
            <a href="#" target="_blank"
              ><img :src="twGreyIcon" alt="twitter"
            /></a>
            <a href="#" target="_blank"
              ><img :src="instGreyIcon" alt="instagram"
            /></a>
            <a href="#" target="_blank"
              ><img :src="ytGreyIcon" alt="youtube"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="right relative rounded-tl-[20px] rounded-tr-[20px] px-[16px] py-[20px] shadow-product-page before:absolute before:left-1/2 before:top-[10px] before:h-[6px] before:w-[40px] before:translate-x-[-50%] before:rounded-[10px] before:bg-neutral-20 lg:w-1/2 lg:pl-0 lg:pt-0 lg:shadow-none lg:before:hidden"
      >
        <TheBreadcrumb />
        <div
          class="hidden lg:mb-[2px] lg:block lg:text-body14m lg:text-neutral-40"
        >
          SKU #{{ product.sku }}
        </div>
        <h1 class="mt-[8px] text-head24b text-neutral-100">
          {{ product.title }}
        </h1>
        <div class="mt-[2px] text-body20b text-neutral-80">
          {{
            currencyFormat(
              product,
              currentCurrency.code,
              currentCurrency.currency
            )
          }}
        </div>
        <div
          class="mt-[16px] flex flex-wrap gap-[16px] text-body16b lg:mb-[18px]"
        >
          <AppButton
            class="bg-blue-black text-neutral-0"
            @click="isContact = !isContact"
          >
            Contact us
          </AppButton>
          <AppButton
            class="border-[2px] border-blue-dark text-blue-dark"
            :left-icon="chatIcon"
          >
            Chat with Monito
          </AppButton>
        </div>
        <div
          class="mb-[15px] mt-[25px] flex items-center justify-between lg:hidden"
        >
          <div class="text-[18px] font-bold text-neutral-100">Information</div>
          <div
            class="flex cursor-pointer items-center justify-end gap-[5px]"
            @click="isOpen = !isOpen"
          >
            <img :src="shareIcon" alt="share" />
            <span class="text-body14b">Share</span>
          </div>
        </div>
        <div class="text-body14m text-neutral-60">
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>SKU</div>
            <div>#{{ product["sku"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Gender</div>
            <div>: {{ product["gender"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Age</div>
            <div>: {{ product["age"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Size</div>
            <div>: {{ product["breed"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Color</div>
            <div>: {{ product["color"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Vaccinated</div>
            <div>: {{ product["Vaccinated"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Dewormed</div>
            <div>: {{ product["Dewormed"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Cert</div>
            <div>: {{ product["Cert"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Microchip</div>
            <div>: {{ product["Microchip"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Location</div>
            <div>: {{ product["Location"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Published Date</div>
            <div>: {{ product["Published Date"] }}</div>
          </div>
          <div
            class="grid grid-cols-2 border-b border-neutral-10 px-[11px] py-[12px]"
          >
            <div>Additional Information</div>
            <div>: {{ product["Additional Information"] }}</div>
          </div>
        </div>
        <div
          v-if="product.sale"
          class="mt-[26px] flex flex-col gap-[12px] rounded-[10px] bg-bgFooter px-[12px] py-[14px] text-body14b sm:flex-row sm:justify-center sm:gap-[20px] lg:hidden"
        >
          <div class="flex items-center gap-[9px]">
            <img :src="saledogIcon" alt="sale" />
            <span>100% health guarantee for pets</span>
          </div>
          <div class="flex items-center gap-[9px]">
            <img :src="saledog2Icon" alt="sale" />
            <span>100% guarantee of pet identification</span>
          </div>
        </div>
      </div>
    </section>
    <section class="customers mt-[40px] pl-[16px] lg:px-0">
      <h2 class="mb-[16px] text-head24b">Our lovely customer</h2>
      <AppCarousel :images="[c1, c2, c3, c4, c5, c6, c7]" />
    </section>
    <section class="product-grid mt-[40px] px-[16px] lg:px-0">
      <h4 class="hidden text-body16m text-black lg:block">Whats new?</h4>
      <h2 class="mb-[16px] text-head24b">See more puppies</h2>
      <AppProductsGrid
        :products="exchangeRateProducts"
        class="lg:hidden"
        :first="0"
        :last="6"
      />
      <AppProductsGrid
        :products="exchangeRateProducts"
        class="hidden lg:flex"
        :first="0"
        :last="4"
      />
    </section>
  </main>
  <teleport to="body">
    <div v-show="isOpen">
      <AppModal :isOpen="isOpen" @close-handler="isOpen = false">
        <h2 class="mb-[20px] text-center text-head36b">Share</h2>
        <div class="flex items-center justify-center gap-[15px]">
          <a href="#" target="_blank"
            ><img :src="fbGreyIcon" alt="facebook"
          /></a>
          <a href="#" target="_blank"
            ><img :src="twGreyIcon" alt="twitter"
          /></a>
          <a href="#" target="_blank"
            ><img :src="instGreyIcon" alt="instagram"
          /></a>
          <a href="#" target="_blank"
            ><img :src="ytGreyIcon" alt="youtube"
          /></a>
        </div>
      </AppModal>
    </div>
    <div v-show="isContact">
      <AppModal :isOpen="isContact" @close-handler="isContact = false">
        <h2 class="mb-[20px] text-center text-head36b">Contact us</h2>

        <AppDynamicForm
          :schema="formSchema"
          :submit-handler="submitContactHandler"
          submit-text="Submit"
          class="m-auto max-w-[500px]"
        />
      </AppModal>
    </div>
  </teleport>
</template>
