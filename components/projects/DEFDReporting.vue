<template>
  <div
    class="min-h-[calc(100vh-71px)] py-[24px] w-[calc(100vw-313px)] ml-auto px-[36px]"
  >
    <h2
      class="text-[20px] leading-[28px] tracking-[2px] font-bold text-[#5B5B5B]"
    >
      DEF D Reporting
    </h2>
    <DataTable

      heading="Datasets"
      :columns="dataSetColumns"
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
            :class="
              row.status != RowStatuses.Completed
                ? 'text-info'
                : 'text-disabled'
            "
            :icon="['far', 'circle-check']"
          />
        </button>
      </template>
    </DataTable>
    <DataTable
      heading="Dataset Relationships"
      :columns="relationshipsColumns"
      :rows="relationshipsRows"
      :allow-details="allowDetails"
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
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { RowStatuses } from "@/types/general";

const DataTable = resolveComponent("table/DataTable");
const allowDetails = false;

const setStatus = (row: Record<string, any>) => {
  const completedRow = rows.value.find((_row) => row.id === _row.id);
  if (completedRow) {
    completedRow.status = RowStatuses.Completed;
    console.log(completedRow);
    completedRow.meta = {
      ...completedRow.meta,
      class: `${completedRow.meta.class} !bg-light-blue`,
    };
  }
};

const dataSetColumns = [
  {
    label: "Name",
    field: "name",
    sortable: true,
    tdClass: "underline text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "File Name",
    field: "fileName",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Provider",
    field: "provider",
    sortable: true,
    tdClass: "underline text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Issues",
    field: "issues",
    sortable: true,
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6 text-center",
  },
  {
    label: "Columns",
    field: "columns",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Rows",
    field: "rows",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Status",
    field: "status",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
];

const relationshipsColumns = [
  {
    label: "Left Dataset",
    field: "leftDataset",
    sortable: true,
    tdClass: "underline text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Right Dataset",
    field: "rightDataset",
    sortable: true,
    tdClass: "underline text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Type",
    field: "type",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
  {
    label: "Columns",
    field: "columns",
    sortable: true,
    tdClass: "text-[#5B5B5B] leading-6 text-[12px]",
    thClass: "font-bold tracking-[1.2px] text-[#5B5B5B] leading-6",
  },
];

const rows = ref([
  {
    id: 1,
    name: "MarketReturns",
    fileName: "MarketReturns_{YYYY}-{MM}.xlsx",
    provider: "Bloomberg",
    issues: 1,
    columns: "4 / 10",
    rows: "18,125",
    status: RowStatuses.Completed,
    meta: {
      class: "!bg-light-blue",
    },
  },
  {
    id: 2,
    name: "FinancialStatements",
    fileName: "FinancialStatements_{YYYY}-{MM}.txt",
    provider: "Brookfield",
    columns: "3 / 5",
    rows: "12,204",
    status: RowStatuses.Completed,
    meta: {
      class: "!bg-light-blue",
      disableDetails: true,
    },
  },
  {
    id: 3,
    name: "BondYields",
    fileName: "BondYields_{YYYY}-{MM}.xlsx",
    provider: "Leonardo",
    issues: 3,
    columns: "5 / 15",
    rows: "1,264",
    status: RowStatuses.InProgress,
    meta: {},
  },
  {
    id: 4,
    name: "PortfolioHoldings",
    fileName: "PortfolioHoldings_{YYYY}-{MM}.xlsx",
    provider: "Bloomberg",
    columns: "4 / 10",
    rows: "389",
    status: RowStatuses.Todo,
    meta: {},
  },
]);
const relationshipsRows = [
  {
    leftDataset: "MarketReturns",
    rightDataset: "PortfolioHoldings",
    type: "1:1",
    columns: "1",
  },
  {
    leftDataset: "FinancialStatements",
    rightDataset: "BondYields",
    type: "1:N",
    columns: "3",
  },
];
</script>
