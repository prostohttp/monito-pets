<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { Form as VeeForm } from "vee-validate";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";
import AppButton from "@/components/ui/AppButton.vue";
import playIcon from "~/icons/play-icon.svg";
import redIcon from "~/icons/red.svg";
import apricotIcon from "~/icons/apricot.svg";
import blackIcon from "~/icons/black.svg";
import blackWhiteIcon from "~/icons/blackwhite.svg";
import silverIcon from "~/icons/silver.svg";
import tanIcon from "~/icons/tan.svg";
import AppModal from "@/components/ui/AppModal.vue";
import AppDropdown from "@/components/ui/AppDropdown.vue";
import filterIcon from "~/icons/filter.svg";
import minMaxIcon from "~/icons/minmax.svg";
import { useSortStore } from "@/stores/sort";
import { useCategoryStore } from "@/stores/category";
import { useCurrencyStore } from "@/stores/currency";
import { useFilterStore } from "@/stores/filter";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import AppProductsGrid from "@/components/pieces/AppProductsGrid.vue";
import ThePagination from "@/components/ThePagination.vue";
import AppAccordion from "@/components/ui/AppAccordion.vue";
import AppCheckbox from "@/components/ui/AppCheckbox.vue";
import AppInput from "@/components/ui/AppInput.vue";

// stores
const sortStore = useSortStore();
const categoryStore = useCategoryStore();
const currencyStore = useCurrencyStore();
const filterStore = useFilterStore();
const { sortList, currentSortType } = storeToRefs(sortStore);
const { changeCurrentSortType } = sortStore;
const {
  filteredProducts,
  male,
  female,
  red,
  apricot,
  blackAndWhite,
  black,
  silver,
  tan,
  white,
  min,
  max,
  small,
  medium,
  large,
} = storeToRefs(filterStore);
const { resetFilters } = filterStore;
const { currentCurrency } = storeToRefs(currencyStore);
const { productsByCategoryHandler } = categoryStore;
const { productsByCategory } = storeToRefs(categoryStore);
const { currentCategoryHandler } = categoryStore;

// vars
const isOpen = ref(false);
const isOpenFilter = ref(false);
const route = useRoute();
const router = useRouter();
let currentCategory = ref({});
const activePage = ref(1);
const perPage = ref(6);
const first = ref(0);
const last = ref();

// Handlers
const pageCount = computed(() => {
  return Math.ceil(filteredProducts.value.length / perPage.value);
});
const productsPerPage = () => {
  if (activePage.value === 1) {
    first.value = 0;
    last.value = first.value + perPage.value;
  } else {
    first.value = activePage.value * perPage.value - perPage.value;
    last.value = first.value + perPage.value;
  }
};
const selectHandler = (selected) => {
  changeCurrentSortType(selected);
};
const activePageHandler = (index) => {
  activePage.value = index;
  router.push({
    name: "category",
    params: { category: route.params.category },
    query: { page: activePage.value },
  });
};
const isAnyFilterOn = computed(() => {
  return !!(
    male.value ||
    female.value ||
    red.value ||
    apricot.value ||
    blackAndWhite.value ||
    black.value ||
    silver.value ||
    tan.value ||
    white.value ||
    min.value ||
    max.value ||
    small.value ||
    medium.value ||
    large.value
  );
});
// Hooks
onMounted(() => {
  productsByCategoryHandler(route.params.category);
  currentCategory = currentCategoryHandler(route.params.category);
  if (route.query.page && route.query.page <= pageCount.value) {
    activePage.value = +route.query.page;
    productsPerPage();
  }
});

watch([route, currentCurrency], () => {
  productsByCategoryHandler(route.params.category);
  currentCategory = currentCategoryHandler(route.params.category);
});

watch(
  route,
  (to, _) => {
    if (!route.query.page) {
      resetFilters();
      if (!to.query.page) {
        activePage.value = 1;
      }
    }
    productsPerPage();
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="m-auto max-w-1180 px-[16px] xl:px-0">
    <TheBreadcrumb />
    <section
      class="banner mb-[22px] overflow-hidden rounded-[16px] bg-yellow-light bg-[url('~/images/cat-banner-bg.svg')] bg-cover bg-[bottom_-265px_center] bg-no-repeat lg:bg-[url(~/images/cat-banner-desktop.svg)] lg:bg-[length:auto_100%] lg:bg-[right_-22px_top]"
    >
      <div
        class="relative z-[1] flex flex-col bg-[url('~/images/banner-puppies.png')] bg-[length:120%] bg-[bottom_center] bg-no-repeat pl-[16px] pr-[20px] pt-[32px] lg:items-end lg:bg-[length:50%] lg:bg-[bottom_left_60px] lg:pr-[85px] lg:pt-[64px]"
      >
        <h2
          class="text-[42px] font-[800] leading-[56px] lg:text-head52xb lg:text-neutral-0"
        >
          One more friend
        </h2>
        <h3
          class="bg-[url('~/images/cat-banner-ball.svg')] bg-[bottom_13px_left_263px] bg-no-repeat text-[26px] font-bold leading-[38px] lg:bg-none lg:text-head36b lg:text-neutral-0"
        >
          Thousands more fun!
        </h3>
        <p
          class="mb-[32px] mt-[12px] text-body12m lg:max-w-[400px] lg:text-right lg:text-neutral-20"
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div
          class="mb-[175px] flex gap-[16px] xs:mb-[255px] sm:mb-[280px] md:mb-[410px] lg:mb-[70px]"
        >
          <AppButton
            class="border-[1.5px] border-blue-dark lg:hidden"
            :right-icon="playIcon"
            @click="isOpen = !isOpen"
          >
            View Intro
          </AppButton>
          <AppButton
            class="hidden border-[1.5px] border-blue-dark lg:flex lg:border-neutral-0 lg:text-neutral-0"
            :right-icon="playIcon"
            :right-invert-icon="true"
            @click="isOpen = !isOpen"
          >
            View Intro
          </AppButton>
          <AppButton
            class="bg-blue-dark text-white lg:bg-neutral-0 lg:text-neutral-100"
          >
            Explore Now
          </AppButton>
        </div>
      </div>
    </section>
    <section class="flex gap-[20px]">
      <div class="mt-[38px] hidden basis-1/4 lg:block">
        <h3 class="mb-[14px] text-head24b">Filter</h3>
        <section class="border-b border-neutral-10 pb-[16px]">
          <AppAccordion
            title="Gender"
            class="mb-[20px] text-body16b text-blue-black"
            :open="true"
            :full-with="false"
          >
            <div>
              <AppCheckbox value="Male" v-model="male" />
              <AppCheckbox value="Female" v-model="female" />
            </div>
          </AppAccordion>
        </section>
        <section class="border-b border-neutral-10 py-[16px]">
          <AppAccordion
            title="Color"
            class="mb-[20px] text-body16b text-blue-black"
            :open="true"
            :full-with="false"
          >
            <div>
              <AppCheckbox value="Red" v-model="red" :image="redIcon" />
              <AppCheckbox
                value="Apricot"
                v-model="apricot"
                :image="apricotIcon"
              />
              <AppCheckbox value="Black" v-model="black" :image="blackIcon" />
              <AppCheckbox
                value="Black & White"
                v-model="blackAndWhite"
                :image="blackWhiteIcon"
              />
              <AppCheckbox
                value="Silver"
                v-model="silver"
                :image="silverIcon"
              />
              <AppCheckbox value="Tan" v-model="tan" :image="tanIcon" />
            </div>
          </AppAccordion>
        </section>
        <section class="border-b border-neutral-10 py-[16px]">
          <AppAccordion
            title="Price"
            class="mb-[20px] text-body16b text-blue-black"
            :open="true"
            :full-with="false"
          >
            <div class="flex gap-[20px]">
              <div class="relative w-full">
                <input
                  type="number"
                  min="1"
                  v-model.lazy="min"
                  placeholder="Min"
                  class="w-full basis-6/12 border border-b border-neutral-40 border-transparent border-b-neutral-10 bg-neutral-0 px-[28px] py-[14px] pl-[10px] text-[15px] text-body14m font-[500] leading-[20px] text-neutral-80 placeholder-neutral-40"
                />
                <img
                  :src="minMaxIcon"
                  alt="icon"
                  class="absolute right-[14px] top-1/2 -translate-y-1/2"
                />
              </div>
              <div class="relative w-full">
                <input
                  type="number"
                  min="1"
                  v-model.lazy="max"
                  placeholder="Max"
                  class="w-full basis-6/12 border border-b border-neutral-40 border-transparent border-b-neutral-10 bg-neutral-0 px-[28px] py-[14px] pl-[10px] text-[15px] text-body14m font-[500] leading-[20px] text-neutral-80 placeholder-neutral-40"
                />
                <img
                  :src="minMaxIcon"
                  alt="icon"
                  class="absolute right-[14px] top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </AppAccordion>
        </section>
        <section class="border-b border-neutral-10 py-[16px]">
          <AppAccordion
            title="Breed"
            class="mb-[20px] text-body16b text-blue-black"
            :open="true"
            :full-with="false"
          >
            <div>
              <AppCheckbox value="Small" v-model="small" />
              <AppCheckbox value="Medium" v-model="medium" />
              <AppCheckbox value="Large" v-model="large" />
            </div>
          </AppAccordion>
        </section>
      </div>
      <div class="w-full lg:w-auto lg:basis-3/4">
        <div
          class="sort-filter mb-[25px] flex justify-between lg:mb-[25px] lg:mt-[35px]"
        >
          <div
            class="flex flex-col lg:w-full lg:flex-row-reverse lg:items-center lg:justify-between"
          >
            <AppDropdown
              :list="sortList"
              @select-handler="selectHandler"
              :selected="currentSortType"
              class="mb-[25px] lg:mb-0"
            />
            <div
              v-if="productsByCategory.length"
              class="flex items-center gap-[14px]"
            >
              <h2 class="text-head24b">
                {{ currentCategory ? currentCategory.title : "" }}
              </h2>
              <span class="text-body14m text-neutral-60">
                {{ filteredProducts ? filteredProducts.length : "" }}
                puppies
              </span>
            </div>
          </div>
          <div>
            <div
              class="mt-[10px] flex items-center gap-[10px] hover:cursor-pointer lg:hidden"
              @click="isOpenFilter = !isOpenFilter"
            >
              <img :src="filterIcon" alt="filter" />
              <span class="mr-[20px] text-body16b">Filter</span>
            </div>
          </div>
        </div>
        <div class="products">
          <h1
            v-if="!productsByCategory.length"
            class="mt-[30px] w-full text-head36b"
          >
            Nothing there
          </h1>
          <AppProductsGrid
            v-if="!isAnyFilterOn"
            :products="filteredProducts"
            :first="first"
            :last="last"
            :grid4="false"
          />
          <AppProductsGrid
            v-else
            :products="filteredProducts"
            :first="0"
            :grid4="false"
          />
        </div>
        <div
          v-if="filteredProducts.length && !isAnyFilterOn"
          class="pagination mt-[40px]"
        >
          <ThePagination
            :page-count="pageCount"
            :per-page="perPage"
            :active-page="activePage"
            @set-active-page="activePageHandler"
          />
        </div>
      </div>
    </section>
  </div>
  <teleport to="body">
    <template v-if="isOpen">
      <AppModal
        :isOpen="isOpen"
        @close-handler="isOpen = !isOpen"
        :overflow="true"
      >
        <h2 class="text-center text-head36b">Adopt dog</h2>
        <div class="aspect-video overflow-hidden">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YQDDm9HLkV4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </AppModal>
    </template>
    <template v-if="isOpenFilter">
      <AppModal
        :isOpen="isOpenFilter"
        @close-handler="isOpenFilter = !isOpenFilter"
        class="lg:hidden"
      >
        <div>
          <h3 class="mb-[14px] text-head24b">Filter</h3>
          <section class="border-b border-neutral-10 pb-[16px]">
            <AppAccordion
              title="Gender"
              class="mb-[20px] text-body16b text-blue-black"
              :open="true"
              :full-with="false"
            >
              <div>
                <AppCheckbox value="Male" v-model="male" />
                <AppCheckbox value="Female" v-model="female" />
              </div>
            </AppAccordion>
          </section>
          <section class="border-b border-neutral-10 py-[16px]">
            <AppAccordion
              title="Color"
              class="mb-[20px] text-body16b text-blue-black"
              :open="true"
              :full-with="false"
            >
              <div>
                <AppCheckbox value="Red" v-model="red" :image="redIcon" />
                <AppCheckbox
                  value="Apricot"
                  v-model="apricot"
                  :image="apricotIcon"
                />
                <AppCheckbox value="Black" v-model="black" :image="blackIcon" />
                <AppCheckbox
                  value="Black & White"
                  v-model="blackAndWhite"
                  :image="blackWhiteIcon"
                />
                <AppCheckbox
                  value="Silver"
                  v-model="silver"
                  :image="silverIcon"
                />
                <AppCheckbox value="Tan" v-model="tan" :image="tanIcon" />
              </div>
            </AppAccordion>
          </section>
          <section class="border-b border-neutral-10 py-[16px]">
            <AppAccordion
              title="Price"
              class="mb-[20px] text-body16b text-blue-black"
              :open="true"
              :full-with="false"
            >
              <div class="flex gap-[10px]">
                <AppInput
                  :relative="true"
                  type="number"
                  min="1"
                  v-model.number="min"
                  placeholder="Min"
                  class="basis-6/12 border-b border-transparent border-b-neutral-10 bg-neutral-0 pl-[10px] text-body14m placeholder-blue-dark"
                  :icon="minMaxIcon"
                />
                <AppInput
                  :relative="true"
                  type="number"
                  min="1"
                  v-model.number="max"
                  placeholder="Max"
                  class="basis-6/12 border-b border-transparent border-b-neutral-10 bg-neutral-0 pl-[10px] text-body14m placeholder-blue-dark"
                  :icon="minMaxIcon"
                />
              </div>
            </AppAccordion>
          </section>
          <section class="border-b border-neutral-10 py-[16px]">
            <AppAccordion
              title="Breed"
              class="mb-[20px] text-body16b text-blue-black"
              :open="true"
              :full-with="false"
            >
              <div>
                <AppCheckbox value="Small" v-model="small" />
                <AppCheckbox value="Medium" v-model="medium" />
                <AppCheckbox value="Large" v-model="large" />
              </div>
            </AppAccordion>
          </section>
        </div>
      </AppModal>
    </template>
  </teleport>
</template>
