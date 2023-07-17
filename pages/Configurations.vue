<template>
  <main>
    <UISideBar
      title="Configurations"
      :tabs="tabs"
      @setActiveTab="setActiveTab"
    />
    <ConfigurationsConfigFunctions v-if="isActiveTab('Functions')" />
    <ConfigurationsKeyDateFormats v-if="isActiveTab('Key & Date Formats')" />
    <ConfigurationsConfigUsers v-if="isActiveTab('Users')" />
  </main>
</template>

<script setup lang="ts">
const tabs = [
  {
    tabId: 1,
    tabTitle: "Functions",
    tabActive: ref(true),
  },
  {
    tabId: 2,
    tabTitle: "Key & Date Formats",
    tabActive: ref(false),
  },
  {
    tabId: 3,
    tabTitle: "Users",
    tabActive: ref(false),
  },
];

const setActiveTab = (tab: any) => {
  tabs.forEach((t) => {
    t.tabActive.value = false;
  });
  tab.tabActive.value = true;
  activeTab.value = tab.tabTitle;
};

const activeTab = ref("Functions");
const isActiveTab = (tab: any) => {
  return tab === activeTab.value;
};
</script>
