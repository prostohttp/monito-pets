import facebook from "~/icons/facebook.svg";
import twitter from "~/icons/twitter.svg";
import instagram from "~/icons/instagram.svg";
import youtube from "~/icons/youtube.svg";

export const subMenu = [
  {
    title: "Popular",
    to: "/category/popular",
    children: [
      { title: "Yorkshire Terrier", to: "/category" },
      { title: "Pug", to: "/category" },
      { title: "Cocker Spaniel", to: "/category" },
      { title: "Jack Russell Terrier", to: "/category" },
      { title: "Beagle", to: "/category" },
      { title: "Husky", to: "/category" },
      { title: "Samoyed", to: "/category" },
      { title: "Labrador", to: "/category" },
      { title: "Tosa", to: "/category" },
      { title: "Dachshund", to: "/category" },
      { title: "French Bulldog", to: "/category" },
      { title: "Chihuahua", to: "/category" },
    ],
  },
  {
    title: "Large Dog",
    to: "/category/large-dog",
    children: [
      { title: "Akita", to: "/category" },
      { title: "Alaskan Malamute", to: "/category" },
      { title: "Bernese Moutain", to: "/category" },
      { title: "Bloodhound", to: "/category" },
      { title: "Bullmastiff Terrier", to: "/category" },
      { title: "Cane Corso", to: "/category" },
    ],
  },
  {
    title: "Small Dog",
    to: "/category/large-dog",
    children: [
      { title: "Beagle", to: "/category" },
      { title: "Boston Terrier", to: "/category" },
      { title: "Calm Terrier", to: "/category" },
      { title: "Chihuahua", to: "/category" },
      { title: "Cocker Spaniel", to: "/category" },
      { title: "Dachshund", to: "/category" },
    ],
  },
];
export const menuItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Category",
    to: "/category",
    children: subMenu,
  },
  {
    title: "About",
    to: "/information/about",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

export const socialItems = [
  {
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    icon: instagram,
    link: "https://instagram.com",
  },
  {
    icon: youtube,
    link: "https://youtube.com",
  },
];

export const menu2Items = [
  { title: "Terms of Service", to: "/information/terms" },
  { title: "Privacy Policy", to: "/information/policy" },
];
