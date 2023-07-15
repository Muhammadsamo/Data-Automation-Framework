<template>
  <main>
    <SideBar title="Projects" :tabs="tabs" />
    <h1 class="text-3xl font-bold underline text-green-400 text-center">
      Projecs Page
    </h1>
  </main>
</template>

<script setup>
const tabs = [
  {
    tabId: 1,
    tabTitle: "BR CoF Reporting",
  },
  {
    tabId: 2,
    tabTitle: "DEF D Reporting",
  },
  {
    tabId: 3,
    tabTitle: "ABC Loan FX Conversion",
  },
  {
    tabId: 4,
    tabTitle: "LR1555 Adjustments",
  },
];
</script>
