<template>
  <main>
    <h1 class="text-3xl font-bold underline text-green-400 mt-2 text-center">
      Projecs Page
    </h1>
    <!-- <GeneralForm :form-schema="formSchema" /> -->
  </main>
</template>

<script setup lang="ts">
import GeneralForm, { IFormControl } from "@/components/form/GeneralForm.vue";
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
</script>
