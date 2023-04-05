import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCategoryStore } from "@/stores/category";
import { useCurrencyStore } from "@/stores/currency";
import { v4 as uuidv4 } from "uuid";
import pr1 from "~/images/product-1.jpg";
import pr2 from "~/images/product-2.jpg";
import pr3 from "~/images/product-3.jpg";
import pr4 from "~/images/product-4.jpg";
import pr5 from "~/images/product-5.jpg";
import pr6 from "~/images/product-6.jpg";
import pr7 from "~/images/product-7.jpg";
import pr8 from "~/images/product-8.jpg";
import pr9 from "~/images/product-9.jpg";
import pr10 from "~/images/product-10.jpg";
import pr11 from "~/images/product-11.jpg";
import pr12 from "~/images/product-12.jpg";
import pr13 from "~/images/product-13.jpg";
import pr14 from "~/images/product-14.jpg";
import pr15 from "~/images/product-15.jpg";
import pr16 from "~/images/product-16.jpg";

export const useProductStore = defineStore("product", () => {
  const id = uuidv4();
  const exchangeRate = [
    { code: "ru", rate: 1 },
    { code: "eu", rate: 0.0017 },
    { code: "us", rate: 0.0128 },
    { code: "vn", rate: 294.87 },
  ];
  const categoryStore = useCategoryStore();
  const currencyStore = useCurrencyStore();
  const { currentCurrency } = storeToRefs(currencyStore);
  const products = ref([
    {
      id: id,
      sale: false,
      image: pr1,
      name: "MO231 - Pomeranian White",
      categoryId: 2,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 100,
      },
    },
    {
      id: id,
      sale: false,
      image: pr2,
      name: "MO502 - Poodle Tiny Yellow",
      categoryId: 3,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 200,
      },
    },
    {
      id: id,
      sale: false,
      image: pr3,
      name: "MO102 - Poodle Tiny Sepia",
      categoryId: 2,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 3665,
      },
    },
    {
      id: id,
      sale: false,
      image: pr4,
      name: "MO512 - Alaskan Malamute Grey",
      categoryId: 5,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 5653,
      },
    },
    {
      id: id,
      sale: false,
      image: pr5,
      name: "MO231 - Pembroke Corgi Cream",
      categoryId: 6,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 65653,
      },
    },
    {
      id: id,
      sale: false,
      image: pr6,
      name: "MO502 - Pembroke Corgi Tricolor",
      categoryId: 20,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 43434,
      },
    },
    {
      id: id,
      sale: false,
      image: pr7,
      name: "MO231 - Pomeranian White",
      categoryId: 21,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 3323,
      },
    },
    {
      id: id,
      sale: false,
      image: pr8,
      name: "MO512 - Poodle Tiny Dairy Cow",
      categoryId: 24,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 3333,
      },
    },
    {
      id: id,
      sale: "Free Toy & Free Shaker",
      image: pr9,
      name: "Reflex Plus Adult Cat Food Salmon",
      categoryId: 2,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 326,
      },
    },
    {
      id: id,
      sale: "Free Toy & Free Shaker",
      image: pr10,
      name: "Reflex Plus Adult Cat Food Salmon",
      categoryId: 23,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 7865,
      },
    },
    {
      id: id,
      sale: "Free Cat Food",
      image: pr11,
      name: "Cat scratching ball toy kitten sisal rope ball",
      categoryId: 25,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 1007,
      },
    },
    {
      id: id,
      sale: "Free Cat Food",
      image: pr12,
      name: "Cute Pet Cat Warm Nest",
      categoryId: 27,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 9765,
      },
    },
    {
      id: id,
      sale: "Free Toy & Free Shaker",
      image: pr13,
      name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
      categoryId: 10,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 4578,
      },
    },
    {
      id: id,
      sale: "Free Toy & Free Shaker",
      image: pr14,
      name: "Costumes Fashion Pet Clother Cowboy Rider",
      categoryId: 11,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 656,
      },
    },
    {
      id: id,
      sale: "Free Cat Food",
      image: pr15,
      name: "Costumes Chicken Drumsti ck Headband",
      categoryId: 12,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 6786,
      },
    },
    {
      id: id,
      sale: "Free Cat Food",
      image: pr16,
      name: "Plush Pet Toy",
      categoryId: 13,
      options: {
        gender: "Male",
        color: "White",
        breed: "Large",
        age: "02 months",
        price: 1000,
      },
    },
  ]);
  const currentRate = computed(() => {
    return exchangeRate.find((el) => el.code === currentCurrency.value.code)[
      "rate"
    ];
  });

  const exchangeRateProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        options: {
          ...product.options,
          price: currentRate.value * product.options.price,
        },
      };
    });
  });

  return {
    products,
    exchangeRateProducts,
  };
});
