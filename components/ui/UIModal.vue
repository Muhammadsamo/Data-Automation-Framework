<template>
  <teleport to="body">
    <UIBackdrop
      :show="show"
      :interactive-backdrop="interactiveBackdrop"
      @click="onClick"
      @show-content="showContent = true"
    >
      <div class="flex-center h-full">
        <!-- Modal -->
        <Transition name="slide-fade" @after-leave="emit('update:show', false)">
          <div
            v-if="showContent"
            ref="modalRef"
            class="bg-white max-w-2xl mx-auto"
          >
            <!-- Modal Header -->
            <div class="bg-secondary px-7 py-5 flex">
              <slot name="modal-header">
                <UIHeading :level="5">
                  {{ heading }}
                </UIHeading>
                <button
                  class="text-info text-xs ml-auto flex items-center font-bold"
                  @click="hideModal"
                >
                  Cancel
                  <SvgsCloseCircle class="ml-2" />
                </button>
              </slot>
            </div>
            <!-- Modal Body -->
            <div class="px-7 py-5">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </UIBackdrop>
  </teleport>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:show"]);
interface IProps {
  show: boolean;
  heading?: string;
  transitionDuration?: number;
  interactiveBackdrop?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  transitionDuration: 300,
  interactiveBackdrop: true,
});

const showContent = ref(false);
const modalRef = ref();

const hideModal = () => {
  showContent.value = false;
};
const hideModalWithEscape = (e: KeyboardEvent) => {
  // if (!props.closeOnBackdropClick) return;
  if (e.key === "Escape") {
    hideModal();
  }
};

watch(
  () => props.show,
  (newVal: boolean) => {
    if (newVal) {
      document.addEventListener("keyup", hideModalWithEscape);
      document.body.classList.add("modal-open");
    } else {
      setTimeout(() => {
        document.body.classList.remove("modal-open");
        document.removeEventListener("keyup", hideModalWithEscape);
      }, props.transitionDuration);
    }
  }
);

const onClick = ({
  mouseDownEl,
  event,
}: {
  mouseDownEl: HTMLElement;
  event: MouseEvent;
}) => {
  if (
    modalRef.value?.contains(event.target as HTMLElement) ||
    modalRef.value?.contains(mouseDownEl)
  )
    return;
  hideModal();
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 300ms ease-out;
}

.slide-fade-leave-active {
  transition: all 300ms ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
