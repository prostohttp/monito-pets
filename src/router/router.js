import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
      name: "home",
      meta: {
        layout: "HomePage",
        title: "Home",
      },
    },
    {
      path: "/category/:category",
      component: () => import("@/views/Category.vue"),
      name: "category",
      meta: {
        layout: "CategoryPage",
      },
    },
    {
      path: "/category",
      component: () => import("@/views/AllCategory.vue"),
      name: "all-category",
      meta: {
        layout: "DefaultPage",
        title: "Category",
      },
    },
    {
      path: "/product/:product",
      component: () => import("@/views/Product.vue"),
      name: "product",
      meta: {
        layout: "ProductPage",
      },
    },
    {
      path: "/search",
      component: () => import("@/views/Search.vue"),
      name: "search",
      meta: {
        layout: "DefaultPage",
        title: "Search",
      },
    },
    {
      path: "/product",
      component: () => import("@/views/AllProducts.vue"),
      name: "products",
      meta: {
        layout: "DefaultPage",
        title: "All Products",
      },
    },
    {
      path: "/partners",
      component: () => import("@/views/Partners.vue"),
      name: "partners",
      meta: {
        layout: "DefaultPage",
        title: "Partners",
      },
    },
    {
      path: "/partners/:partner",
      component: () => import("@/views/Partner.vue"),
      name: "partner",
      meta: {
        layout: "DefaultPage",
      },
    },
    {
      path: "/articles",
      component: () => import("@/views/Articles.vue"),
      name: "articles",
      meta: {
        layout: "DefaultPage",
        title: "All Articles",
      },
    },
    {
      path: "/articles/:article",
      component: () => import("@/views/Article.vue"),
      name: "article",
      meta: {
        layout: "DefaultPage",
      },
    },
    {
      path: "/account/",
      component: () => import("@/views/Account.vue"),
      name: "account",
      meta: {
        layout: "AccountPage",
        title: "",
      },
    },
    {
      path: "/cart",
      component: () => import("@/views/Cart.vue"),
      name: "cart",
      meta: {
        layout: "CartPage",
        title: "Account",
      },
    },
    {
      path: "/information/:information",
      component: () => import("@/views/Information.vue"),
      name: "information",
      meta: {
        layout: "DefaultPage",
        title: "",
      },
    },
    {
      path: "/auth",
      component: () => import("@/views/Auth.vue"),
      name: "auth",
      meta: {
        layout: "DefaultPage",
        title: "Auth",
      },
    },
    {
      path: "/contact",
      component: () => import("@/views/Contact.vue"),
      name: "contact",
      meta: {
        layout: "DefaultPage",
        title: "Contact",
      },
    },
    {
      path: "/elements",
      component: () => import("@/views/Elements.vue"),
      name: "elements",
      meta: {
        layout: "BlankPage",
        title: "Elements",
      },
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/views/NotFound.vue"),
      name: "notfound",
      meta: {
        layout: "DefaultPage",
        title: "Not Found",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (!to.query.page) {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
