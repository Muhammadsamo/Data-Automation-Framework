<template>
  <nav>
    <ul class="flex gap-x-[23px] items-center w-[480px]">
      <li v-for="link in links" :key="link.pageId">
        <NuxtLink
          :to="link.address"
          class="font-Exo font-bold text-[12px] text-[#FFFFFF] tracking-[1.2px] px-[16px] py-8px"
          >{{ link.name }}</NuxtLink
        >
      </li>
      <li><img src="/header/profile-icon.svg" alt="profile-icon" /></li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  {
    pageId: 1,
    name: "Home",
    address: "/",
  },
  {
    pageId: 2,
    name: "Projects",
    address: "/Projects",
  },
  {
    pageId: 3,
    name: "Configurations",
    address: "/Configurations",
  },
  {
    pageId: 3,
    name: "Settings",
    address: "/Settings",
  },
];
</script>
