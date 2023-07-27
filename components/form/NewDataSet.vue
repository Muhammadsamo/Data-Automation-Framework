<template>
  <div
    class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[528px] h-[447px] bg-[#FFFFFF] flex flex-col items-center justify-center"
  >
    <header
      class="bg-secondary h-[46px] leading-7 font-bold flex items-center justify-between pl-[30px] pr-[28px] fixed top-0 w-full"
    >
      <span class="text-[#FFFFFF] text-[20px] tracking-[2px]">New Dataset</span>
      <span
        class="flex justify-between text-[12px] text-info items-center gap-[6px] cursor-pointer"
        >Cancel<SvgsCloseCircle></SvgsCloseCircle
      ></span>
    </header>
    <GeneralForm :form-schema="formSchema" class="mt-[74px]">
      <template #genralForm-append>
        <div class="flex justify-between items-center">
          <UIButton
            text="Add New"
            variant="primary"
            class="primary flex items-center rounded h-[43px]"
            @click="onSubmit"
          >
            <template #button-prepend>
              <SvgsAddIcon
                class="mr-[11px]"
                fill-class="fill-[#FFFFFF]"
              ></SvgsAddIcon>
            </template>
          </UIButton>
          <span
            v-if="submitted"
            class="text-light-green text-base tracking-[1.6px]"
            >Dataset added successfully.</span
          >
        </div>
      </template>
    </GeneralForm>
  </div>
</template>

<script setup lang="ts">
import GeneralForm, { IFormControl } from "@/components/form/GeneralForm.vue";

const submitted = ref(false);

const onSubmit = () => {
  submitted.value = true;
};

const formSchema: IFormControl[] = [
  {
    // label: "Title",
    name: "name",
    as: "TextInput",
    placeholder: "Name",
    class: "w-[470px] mb-[10px] h-[30px] text-gray text-[12px]",
  },
  {
    // label: "Title",
    name: "file-name",
    as: "TextInput",
    placeholder: "File Name",
    class: "w-[470px] mb-[10px] h-[30px] text-gray text-[12px]",
  },
  {
    // label: "Title",
    name: "provider",
    as: "SelectInput",
    class: "w-[470px] mb-[10px] h-[30px] text-gray text-[12px]",
    options: [
      {
        label: "provider1",
        value: "provider1",
        tag: "option",
      },
      {
        label: "provider2",
        value: "provider2",
        tag: "option",
      },
    ],
  },
  {
    // label: "Title",
    name: "Type",
    as: "SelectInput",
    class: "w-[470px] mb-[10px] h-[30px] text-gray text-[12px]",
    options: [
      {
        label: "Actuals",
        value: "Actuals",
        tag: "option",
      },
      {
        label: "Referential",
        value: "Referential",
        tag: "option",
      },
      {
        label: "Output",
        value: "Output",
        tag: "option",
      },
    ],
  },
  {
    // label: "Title",
    name: "Status",
    as: "SelectInput",
    class: "w-[470px] mb-[10px] h-[30px] text-gray text-[12px]",
    options: [
      {
        label: "To do",
        value: "To do",
        tag: "option",
      },
      {
        label: "In Progress",
        value: "In Progress",
        tag: "option",
      },
      {
        label: "Completed",
        value: "Completed",
        tag: "option",
      },
    ],
  },
  {
    // label: "Title",
    name: "description",
    as: "TextArea",
    placeholder: "Description",
    class: "w-[470px] mb-[20px] h-[86px] text-gray text-[12px]",
  },
];
</script>
