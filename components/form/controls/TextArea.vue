<template>
  <FormControl
    v-slot="{ fieldProps }"
    :label="label"
    :name="name"
    :rules="rules"
  >
    <textarea
      v-bind="{ ...$attrs, ...fieldProps.field }"
      :id="name"
      :class="{ 'border-red': fieldProps.errors.length }"
      class="border-input-border border rounded-[3px] py-2 px-3 text-gray resize-none"
    />
  </FormControl>
</template>

<script setup lang="ts">
import { IFormControl } from "../GeneralForm.vue";
import FormControl from "./FormControl.vue";
type IProps = IFormControl;
defineProps<IProps>();
</script>
