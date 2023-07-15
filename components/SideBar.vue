<template>
  <div
    class="h-screen fixed left-0 bg-[#F1F1F1] w-[313px] transition-all ease duration-300 px-[20px] py-[24px]"
    :class="{ '-translate-x-[100%]': !sidebarOpen }"
  >
    <span
      class="absolute right-[-16px] top-[50px] bg-[#F1F1F1] w-[16px] h-[40px] rounded-r-[5px] rounded-br-[5px] flex cursor-pointer"
      @click="toggleSidebar"
    >
      <img
        src="/sidebar/sidebar-toggle.svg"
        width="8"
        height="13px"
        alt="sidebar toggle button"
        :class="{ 'rotate-180': !sidebarOpen }"
      />
    </span>
    <h1 class="text-[#5B5B5B] text-[20px] leading-[28px] font-bold">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps([{ title: String }]);
const sidebarOpen = ref(true);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>
