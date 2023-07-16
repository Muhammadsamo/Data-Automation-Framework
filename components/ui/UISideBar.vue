<template>
  <div
    class="h-screen fixed left-0 bg-[#F1F1F1] w-[313px] transition-all ease duration-300 px-[20px] py-[24px]"
    :class="{ '-translate-x-[100%]': !sidebarOpen }"
  >
    <span
      class="absolute right-[-16px] top-[16px] bg-[#F1F1F1] w-[16px] h-[40px] rounded-r-[5px] rounded-br-[5px] flex cursor-pointer"
      @click="toggleSidebar"
    >
      <img
        src="/sidebar/sidebar-toggle.svg"
        width="8"
        height="13"
        alt="sidebar toggle button"
        :class="{ 'rotate-180': !sidebarOpen }"
      />
    </span>
    <h1
      class="text-[20px] leading-[28px] tracking-[2px] font-bold text-[#5B5B5B]"
    >
      {{ title }}
    </h1>
    <ul class="mt-6">
      <li
        v-for="tab in tabs"
        :key="tab.tabId"
        class="w-[274px] h-[28px] text-[12px] font-semibold leading-6 px-[8px] py-[2px] text-[#5B5B5B] bg-[#DCECFA] border border-[#DCDCDC] rounded-[3px] mb-[8px] cursor-pointer hover:bg-[#185E9D] hover:text-[#FFFFFF]"
        :class="{ '!bg-[#185E9D] text-[#FFFFFF]': tab.tabActive.value }"
        @click="changeActiveTab(tab)"
      >
        {{ tab.tabTitle }}
      </li>
    </ul>

    <slot name="sidebar-append" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string;
  tabs?: any;
}
const emit = defineEmits(["setActiveTab"]);
const sidebarOpen = ref(true);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

function changeActiveTab(tab: any) {
  emit("setActiveTab", tab);
}

defineProps<IProps>();
</script>
