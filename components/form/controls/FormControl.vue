<template>
  <div>
    <FormLabel v-if="label" :label-for="name">{{ label }}</FormLabel>
    <Field v-slot="fieldProps" :name="name" :rules="rules">
      <slot :field-props="fieldProps" />
      <slot name="control-append" />
      <FormError v-if="fieldProps.errorMessage">
        {{ fieldProps.errorMessage }}
      </FormError>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { ObjectSchema } from "yup";

interface IProps {
  label?: string;
  name: string;
  rules?: ObjectSchema<any>;
}

defineProps<IProps>();
</script>
