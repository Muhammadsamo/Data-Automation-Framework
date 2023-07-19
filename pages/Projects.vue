<template>
  <main>
    <UISideBar title="Projects" :tabs="tabs" @setActiveTab="setActiveTab">
      <template #sidebar-append>
        <UIButton
          text="New Project"
          variant="primary"
          class="primary flex items-center rounded w-[180px] h-[43px] absolute bottom-[90px]"
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
    <!-- <GeneralForm :form-schema="formSchema" /> -->
  </main>
</template>

<script setup lang="ts">
// import GeneralForm, { IFormControl } from "@/components/form/GeneralForm.vue";
// const formSchema: IFormControl[] = [
//   {
//     // label: "Title",
//     name: "title",
//     as: "TextInput",
//     placeholder: "Description",
//     class: "w-80",
//   },
//   {
//     // label: "Title",
//     name: "description",
//     as: "TextArea",
//     placeholder: "Description",
//     class: "w-80",
//   },
//   {
//     // label: "Title",
//     name: "accessLevel",
//     as: "SelectInput",
//     class: "w-80",
//     options: [
//       {
//         label: "Owner",
//         value: "owner",
//         tag: "option",
//       },
//       {
//         label: "Editor",
//         value: "editor",
//         tag: "option",
//       },
//     ],
//   },

//   {
//     name: "startDate",
//     as: "DatePickerInput",
//     placeholder: "Description",
//     class: "w-80",
//   },
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
