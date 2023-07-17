<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4111 2.22222L17.7778 7.58889V17.7778H2.22222V2.22222H12.4111ZM12.4111 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19 1 20 2.22222 20H17.7778C19 20 20 19 20 17.7778V7.58889C20 7 19.7667 6.43333 19.3444 6.02222L13.9778 0.655555C13.5667 0.233333 13 0 12.4111 0ZM4.44444 13.3333H15.5556V15.5556H4.44444V13.3333ZM4.44444 8.88889H15.5556V11.1111H4.44444V8.88889ZM4.44444 4.44444H12.2222V6.66667H4.44444V4.44444Z"
      :class="[fillClass]"
    />
  </svg>
</template>

<script setup lang="ts">
import { ISvgProps } from "../../types/general";
interface IProps extends ISvgProps {}
withDefaults(defineProps<IProps>(), {
  width: 20,
  height: 20,
  fillClass: "fill-secondary",
});
</script>
