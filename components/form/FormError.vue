<template>
  <p>
    <slot>
      {{ error }}
    </slot>
  </p>
</template>

<script lang="ts" setup>
interface IProps {
  error?: string;
}
defineProps<IProps>();
</script>
