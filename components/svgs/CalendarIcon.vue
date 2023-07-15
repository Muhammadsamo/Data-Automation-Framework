<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6 1.4H11.9V0H10.5V1.4H3.5V0H2.1V1.4H1.4C0.63 1.4 0 2.03 0 2.8V14C0 14.77 0.63 15.4 1.4 15.4H12.6C13.37 15.4 14 14.77 14 14V2.8C14 2.03 13.37 1.4 12.6 1.4ZM12.6 14H1.4V6.3H12.6V14ZM12.6 4.9H1.4V2.8H12.6V4.9Z"
      :fill="fill"
    />
  </svg>
</template>

<script setup lang="ts">
import { ISvgProps } from "../../types/general";
interface IProps extends ISvgProps {}
withDefaults(defineProps<IProps>(), {
  width: 14,
  height: 16,
  fill: "#66AAE8",
});
</script>
