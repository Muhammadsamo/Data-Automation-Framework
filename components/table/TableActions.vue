<template>
  <div class="bg-medium-blue px-3 py-2 flex items-center">
    <div class="flex items-center">
      <button @click="toggleTableCollapse">
        <ChevronDown :class="{ '-rotate-90': collapsed }" />
      </button>
      <UIHeading
        :level="6"
        class="!text-dark !font-medium ml-4 tracking-[1.6px]"
      >
        {{ heading }}
      </UIHeading>
    </div>
    <div class="ml-auto flex">
      <button v-for="action in actions" :key="action" class="mr-3">
        <component :is="components[action]" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const ChevronDown = resolveComponent("svgs/ChevronDown");
const DocIcon = resolveComponent("svgs/DocIcon");
const UpArrow = resolveComponent("svgs/UpArrow");
const DownArrow = resolveComponent("svgs/DownArrow");
const AddIcon = resolveComponent("svgs/AddIcon");

type tableActions = "view" | "download" | "upload" | "add";

interface IProps {
  heading?: string;
  actions: [tableActions, tableActions, tableActions, tableActions];
  collapsed: boolean;
}
const props = defineProps<IProps>();
const emit = defineEmits(["update:collapsed"]);

const components = {
  view: DocIcon,
  upload: UpArrow,
  download: DownArrow,
  add: AddIcon,
};

const toggleTableCollapse = () => emit("update:collapsed", !props.collapsed);
</script>

<style scoped></style>
