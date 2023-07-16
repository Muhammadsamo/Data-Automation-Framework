<template>
  <component
    :is="'h' + level"
    :class="[{ ...fontSizeClass }]"
    class="text-white"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    level?: number;
  }>(),
  {
    level: 1,
  },
);

const fontSizeClass = computed(() => {
  return {
    "text-5xl": props.level === 1,
    "text-4xl": props.level === 2,
    "text-3xl": props.level === 3,
    "text-2xl": props.level === 4,
    "text-xl": props.level === 5,
    "text-lg": props.level === 6,
  };
});
</script>
