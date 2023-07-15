<template>
  <FormControl
    :class="containerClassName"
    class="relative"
    :label="label"
    :name="name"
    :rules="rules"
  >
    <template #default="{ fieldProps }">
      <select
        v-bind="{ ...$attrs, ...fieldProps.field }"
        :id="name"
        :class="{ 'border-red': fieldProps.errors.length }"
        class="border-input-border border rounded-[3px] py-2 px-3 text-gray"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </template>
    <template #control-append>
      <ChevronDown
        class="absolute top-[50%] right-[12px] -translate-y-[50%] select-none pointer-events-none"
      />
    </template>
  </FormControl>
</template>

<script setup lang="ts">
import { IFormControl } from "../GeneralForm.vue";
import FormControl from "./FormControl.vue";
import ChevronDown from "@/components/svgs/ChevronDown.vue";
type IProps = IFormControl;
defineProps<IProps>();
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
