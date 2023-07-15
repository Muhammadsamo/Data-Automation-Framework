<template>
  <button :class="classes({ variant })">
    <slot name="button-prepend" />
    <slot>
      {{ text }}
    </slot>
    <slot name="button-append" />
  </button>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";
import { Variant } from "../../types/general";
const classes = cva("font-bold pl-3 pr-6 py-2.5", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-primary text-white",
    },
  },
});

interface IProps {
  text?: string;
  variant: Variant;
}

defineProps<IProps>();
</script>
