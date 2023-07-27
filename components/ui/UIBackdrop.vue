<template>
  <Transition @after-enter="emit('show-content', true)">
    <div
      v-if="show"
      class="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 z-[999]"
      @mousedown="onMouseDown"
      @click="onClick"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["click", "show-content"]);

interface IProps {
  show: boolean;
  interactiveBackdrop?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  interactiveBackdrop: true,
});

const mouseDownRef = ref();
const onMouseDown = (e: MouseEvent) => {
  if (!props.interactiveBackdrop) return;

  mouseDownRef.value = e.target;
};
const onClick = (event: MouseEvent) => {
  if (!props.interactiveBackdrop) return;
  emit("click", { mouseDownEl: mouseDownRef.value, event });
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
