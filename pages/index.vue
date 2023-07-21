<template>
  <main>
    <UISideBar title="Home" />
    <h1 class="text-3xl font-bold underline text-green-400 text-center">
      Home Page
    </h1>
    <TableDataTable
      heading="Datasets"
      :columns="columns"
      :rows="rows"
      :loading="false"
    >
      <template #cell="{ row, col, value }">
        <span
          v-if="col.field === 'issues' && value"
          class="bg-[#FC960D] w-[18px] h-[18px] flex-center text-white rounded-[5px] mx-auto"
        >
          {{ value }}
        </span>
      </template>
      <template #row-actions-middle="{ row }">
        <button class="mr-2" @click="setStatus(row)">
          <font-awesome-icon
            :class="row.status != 'completed' ? 'text-info' : 'text-disabled'"
            :icon="['far', 'circle-check']"
          />
        </button>
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
  {
    label: "Status",
    field: "status",
  },
];

const rows = ref([
  {
    id: 1,
    name: "MarketReturns",
    fileName: "FinancialStatements_{YYYY}-{MM}.txt",
    provider: "Bloomberg",
    issues: 1,
    status: "completed",
    meta: {
      class: "!bg-light-blue",
    },
  },
  {
    id: 2,
    name: "FinancialStatements",
    fileName: "MarketReturns_{YYYY}-{MM}.xlsx",
    provider: "Brookfield",
    meta: {
      disableDetails: true,
    },
    status: "In Progress",
  },
]);

const setStatus = (row: Record<string, any>) => {
  const completedRow = rows.value.find((_row) => row.id === _row.id);
  if (completedRow) {
    completedRow.status = "completed";
    completedRow.meta = {
      ...completedRow.meta,
      class: `${completedRow.meta.class} !bg-light-blue`,
    };
  }
};
// const show = ref(false);
</script>
