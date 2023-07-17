<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 2.33317C12.675 2.33317 15.6667 5.32484 15.6667 8.99984C15.6667 12.6748 12.675 15.6665 9 15.6665C5.32501 15.6665 2.33334 12.6748 2.33334 8.99984C2.33334 5.32484 5.32501 2.33317 9 2.33317ZM9 0.666504C4.40001 0.666504 0.666672 4.39984 0.666672 8.99984C0.666672 13.5998 4.40001 17.3332 9 17.3332C13.6 17.3332 17.3333 13.5998 17.3333 8.99984C17.3333 4.39984 13.6 0.666504 9 0.666504ZM9.83334 8.99984V5.6665H8.16667V8.99984H5.66667L9 12.3332L12.3333 8.99984H9.83334Z"
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
