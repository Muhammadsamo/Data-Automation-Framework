<template>
  <FormControl
    v-slot="{ fieldProps }"
    :label="label"
    :name="name"
    :rules="rules"
  >
    <VueDatePicker
      :id="name"
      :auto-apply="true"
      v-bind="{ ...$attrs, ...fieldProps.field }"
      v-model="fieldProps.field.value"
      calendar-class-name="relative"
      :class="{ 'border-red': fieldProps.errors.length }"
      input-class-name="!border-input-border !border rounded-[3px] !py-2 !px-3 !text-gray placeholder:opacity-100"
    >
      <template #input-icon>
        <CalendarIcon :class="{ hidden: fieldProps.field.value }" />
      </template>
    </VueDatePicker>

    <input />
  </FormControl>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { IFormControl } from "../GeneralForm.vue";
import FormControl from "./FormControl.vue";

import "@vuepic/vue-datepicker/dist/main.css";

const CalendarIcon = resolveComponent("svgs/CalendarIcon");
type IProps = IFormControl;
defineProps<IProps>();
</script>

<style>
.dp__input_icon {
  right: 12px;
  left: auto;
}
</style>
