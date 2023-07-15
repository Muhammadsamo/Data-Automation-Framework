<template>
  <label class="block" :for="labelFor">
    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
  labelFor: string;
}

defineProps<IProps>();
</script>
