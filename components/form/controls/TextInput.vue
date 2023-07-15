<template>
  <FormControl
    v-slot="{ fieldProps }"
    :label="label"
    :name="name"
    :rules="rules"
  >
    <input
      v-bind="{ ...$attrs, ...fieldProps.field }"
      :id="name"
      :class="{ 'border-red': fieldProps.errors.length }"
      class="border-input-border border rounded-[3px] py-2 px-3 text-gray"
    />
  </FormControl>
  <!-- <FormLabel v-if="label" :label-for="name">{{ label }}</FormLabel>
  <Field v-slot="{ errors, errorMessage }" :name="name" :rules="rules">
    <input
      v-bind="$attrs"
      :id="name"
      :class="{ 'border-red': errors.length }"
      class="border-input-border border rounded-[3px] py-2 px-3 placeholder:text-gray"
    />
    <FormError v-if="errorMessage">
      {{ errorMessage }}
    </FormError>
  </Field> -->
</template>

<script setup lang="ts">
import { IFormControl } from "../GeneralForm.vue";
import FormControl from "./FormControl.vue";
type IProps = IFormControl;
defineProps<IProps>();
</script>
