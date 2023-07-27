<template>
  <main>
    <UISideBar title="Projects" :tabs="tabs" @setActiveTab="setActiveTab">
      <template #sidebar-append>
        <UIButton
          text="New Project"
          variant="primary"
          class="primary flex items-center rounded w-[180px] h-[43px] absolute bottom-[90px]"
          @click="addProject"
        >
          <template #button-prepend>
            <SvgsAddIcon
              class="mr-[11px]"
              fill-class="fill-[#FFFFFF]"
            ></SvgsAddIcon>
          </template>
        </UIButton>
      </template>
    </UISideBar>
    <ProjectsBRCoFReporting v-if="isActiveTab('BR CoF Reporting')" />
    <ProjectsDEFDReporting v-if="isActiveTab('DEF D Reporting')" />
    <ProjectsABCLoanFXConversion v-if="isActiveTab('ABC Loan FX Conversion')" />
    <ProjectsLR1555Adjustments v-if="isActiveTab('LR1555 Adjustments')" />

    <UIModal v-model:show="showModal" heading="New Dataset">
      <NewDataSet></NewDataSet>
    </UIModal>
  </main>
</template>

<script setup lang="ts">
import NewDataSet from "@/components/form/NewDataSet.vue";

const showModal = ref(false);

const addProject = () => {
  showModal.value = true;
};

// const formSchema: IFormControl[] = [
//   {
//     // label: "Title",
//     name: "name",
//     as: "TextInput",
//     placeholder: "Name",
//     class: "w-80",
//   },
//   {
//     // label: "Title",
//     name: "file-name",
//     as: "TextArea",
//     placeholder: "File Name",
//     class: "w-80",
//   },
//   {
//     // label: "Title",
//     name: "provider",
//     as: "SelectInput",
//     class: "w-80",
//     options: [
//       {
//         label: "provider1",
//         value: "provider1",
//         tag: "option",
//       },
//       {
//         label: "provider2",
//         value: "provider2",
//         tag: "option",
//       },
//     ],
//   },
//   {
//     // label: "Title",
//     name: "Type",
//     as: "SelectInput",
//     class: "w-80",
//     options: [
//       {
//         label: "Actuals",
//         value: "Actuals",
//         tag: "option",
//       },
//       {
//         label: "Referential",
//         value: "Referential",
//         tag: "option",
//       },
//       {
//         label: "Output",
//         value: "Output",
//         tag: "option",
//       },
//     ],
//   },
//   {
//     // label: "Title",
//     name: "Status",
//     as: "SelectInput",
//     class: "w-80",
//     options: [
//       {
//         label: "To do",
//         value: "To do",
//         tag: "option",
//       },
//       {
//         label: "In Progress",
//         value: "In Progress",
//         tag: "option",
//       },
//       {
//         label: "Completed",
//         value: "Completed",
//         tag: "option",
//       },
//     ],
//   },

//   // {
//   //   name: "startDate",
//   //   as: "DatePickerInput",
//   //   placeholder: "Description",
//   //   class: "w-80",
//   // },
// ];

const tabs = [
  {
    tabId: 1,
    tabTitle: "BR CoF Reporting",
    tabActive: ref(true),
  },
  {
    tabId: 2,
    tabTitle: "DEF D Reporting",
    tabActive: ref(false),
  },
  {
    tabId: 3,
    tabTitle: "ABC Loan FX Conversion",
    tabActive: ref(false),
  },
  {
    tabId: 4,
    tabTitle: "LR1555 Adjustments",
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

const activeTab = ref("BR CoF Reporting");
const isActiveTab = (tab: any) => {
  return tab === activeTab.value;
};
</script>
