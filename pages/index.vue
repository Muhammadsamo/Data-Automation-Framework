<template>
  <main>
    <SideBar title="Home" />
    <h1 class="text-3xl font-bold underline text-green-400 text-center">
      Home Page
    </h1>
    <!-- <button @click="show = true">Show Modal</button> -->
    <!-- <UIModal v-model:show="show" heading="New Task" /> -->
    <TableDataTable
      heading="Datasets"
      :columns="columns"
      :rows="rows"
      :row-meta="{
        class: 'bg-light-blue hover:bg-light-pink',
      }"
    >
      <template #cell="{ row, col, value }">
        <span
          v-if="col.field === 'issues' && value"
          class="bg-[#FC960D] w-[18px] h-[18px] flex-center text-white rounded-[5px] mx-auto"
        >
          {{ value }}
        </span>
      </template>
    </TableDataTable>
  </main>
</template>

<script setup lang="ts">
const columns = [
  {
    label: "Name",
    field: "name",
    sortable: true,
    tdClass: "underline",
  },
  {
    label: "File Name",
    field: "fileName",
    sortable: true,
  },
  {
    label: "Provider",
    field: "provider",
    sortable: true,
  },
  {
    label: "Issues",
    field: "issues",
    sortable: true,
    thClass: "text-center",
  },
];

const rows = [
  {
    name: "MarketReturns",
    fileName: "FinancialStatements_{YYYY}-{MM}.txt",
    provider: "Bloomberg",
    issues: 1,
  },
  {
    name: "FinancialStatements",
    fileName: "MarketReturns_{YYYY}-{MM}.xlsx",
    provider: "Brookfield",
    meta: {
      disableDetails: true,
    },
  },
];
// const show = ref(false);
</script>
