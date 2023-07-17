<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99999 15.6665C5.32499 15.6665 2.33332 12.6748 2.33332 8.99984C2.33332 5.32484 5.32499 2.33317 8.99999 2.33317C12.675 2.33317 15.6667 5.32484 15.6667 8.99984C15.6667 12.6748 12.675 15.6665 8.99999 15.6665ZM8.99999 17.3332C13.6 17.3332 17.3333 13.5998 17.3333 8.99984C17.3333 4.39984 13.6 0.666504 8.99999 0.666504C4.39999 0.666504 0.666656 4.39984 0.666656 8.99984C0.666656 13.5998 4.39999 17.3332 8.99999 17.3332ZM8.16666 8.99984V12.3332H9.83332V8.99984H12.3333L8.99999 5.6665L5.66666 8.99984H8.16666Z"
      :class="[fillClass]"
    />
  </svg>
</template>

<script setup lang="ts">
import { ISvgProps } from "../../types/general";
interface IProps extends ISvgProps {}
withDefaults(defineProps<IProps>(), {
  width: 18,
  height: 18,
  fillClass: "fill-secondary",
});
</script>
