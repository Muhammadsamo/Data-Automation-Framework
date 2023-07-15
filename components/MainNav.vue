<template>
  <nav>
    <ul class="flex justify-between items-center w-[520px]">
      <li v-for="link in links" :key="link.pageId" class="min-h-[32px]">
        <NuxtLink
          :to="link.address"
          class="font-Exo font-bold text-[12px] text-[#FFFFFF] tracking-[1.2px] px-[16px] py-[8px] hover:border border-[#1A67AC] rounded-[3px] hover:bg-[#114471]"
          >{{ link.name }}</NuxtLink
        >
      </li>
      <li class="cursor-pointer min-h-[20px] min-w-[20px]">
        <img
          src="/header/profile-icon.svg"
          width="20"
          height="20"
          alt="profile-icon"
        />
      </li>
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

<style scoped>
.router-link-active {
  border: 3px solid #1a67ac;
  background-color: #114471;
}
</style>
