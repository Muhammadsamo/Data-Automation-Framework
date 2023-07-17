<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0V11.4706H15V0H0ZM8.82353 1.76471V9.70588H6.17647V1.76471H8.82353ZM1.76471 1.76471H4.41176V9.70588H1.76471V1.76471ZM13.2353 9.70588H10.5882V1.76471H13.2353V9.70588Z"
      :class="[fillClass]"
    />
  </svg>
</template>

<script setup lang="ts">
import { ISvgProps } from "../../types/general";
interface IProps extends ISvgProps {}
withDefaults(defineProps<IProps>(), {
  width: 15,
  height: 12,
  fillClass: "fill-info",
});
</script>
