<template>
  <div class="mx-auto border-table-border overflow-hidden my-6">
    <TableActions
      v-model:collapsed="collapsed"
      :actions="['view', 'downward', 'upward', 'add']"
      :heading="heading"
      class="border-table-border border border-b-0 relative z-10"
      @action-click="emit('action-click', $event)"
    />
    <Transition name="slide-fade">
      <div v-if="!collapsed" class="border-table-border border border-t-0">
        <table class="border-seperate text-sm w-full">
          <thead>
            <tr>
              <th
                v-for="{ label, thClass, ...rest } in columns"
                :key="label"
                class="px-3 py-2 font-bold text-left"
                :class="thClass"
                v-bind="rest"
              >
                {{ label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="99" class="py-3">
                <UISpinner class="mx-auto" />
              </td>
            </tr>
            <tr v-else-if="!rows.length">
              <td colspan="99" class="py-3">
                <UINotFound class="text-center" />
              </td>
            </tr>
            <template v-else>
              <tr
                v-for="(row, i) in rows"
                :key="i"
                class="bg-light-pink hover:bg-light-pink"
                :class="[
                  {
                    'border-white border-b': i < rows.length - 1,

                    // '!bg-light-pink': selectedRows.includes(i),
                  },
                ]"
                v-bind="{ ...rowMeta, ...row.meta }"
              >
                <template v-for="col in columns" :key="col.field">
                  <td class="px-3 py-1 mb-2" :class="col.tdClass">
                    <slot
                      name="cell"
                      :row="row"
                      :col="col"
                      :value="row[col.field]"
                    >
                      <span v-if="row[col.field] != null">{{
                        row[col.field]
                      }}</span>
                    </slot>
                  </td>
                </template>
                <td>
                  <button
                    v-if="allowDetails"
                    :disabled="row.meta && row.meta.disableDetails"
                    class="mr-2"
                    @click.stop="
                      emit('row-action', {
                        type: 'show-details',
                        row,
                        i,
                      })
                    "
                  >
                    <font-awesome-icon
                      :icon="['fas', 'table-list']"
                      :class="
                        row.meta && row.meta.disableDetails
                          ? 'text-disabled'
                          : 'text-info'
                      "
                    />
                  </button>
                  <slot
                    name="row-actions-middle"
                    :row-index="i"
                    :row="row"
                  ></slot>
                  <button
                    v-if="allowDelete"
                    @click.stop="
                      emit('row-action', {
                        type: 'delete',
                        row,
                        i,
                      })
                    "
                  >
                    <font-awesome-icon
                      class="text-info"
                      :icon="['fas', 'trash']"
                    />
                  </button>
                  <slot name="row-actions" :row-index="i" :row="row"></slot>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </Transition>
    <!-- <UIPagination
      :page="1"
      :total-pages="4"
      :total="40"
      :per-page="10"
      :current-page="1"
      :has-more-pages="true"
    /> -->
  </div>
</template>

<script setup lang="ts">
import TableActions from "./TableActions.vue";

interface IProps {
  columns: {
    label: string;
    sortable?: boolean;
    field: string;
    thClass?: string;
    tdClass?: string;
    allowDetails?: string;
  }[];
  rows: { [key: string]: any }[];
  rowMeta?: {
    class?: string;
    style?: string;
    actions: {
      text?: string;
      id: string;
    }[];
  };
  allowDetails?: boolean;
  allowDelete?: boolean;
  heading?: string;
  loading?: boolean;
}

withDefaults(defineProps<IProps>(), {
  allowDetails: true,
  allowDelete: true,
  defaultRowActions: () => ["show-details", "delete"],
  loading: false,
});

const emit = defineEmits(["row-action", "row-click", "action-click"]);

const collapsed = ref(false);
// const selectedRows = ref<number[]>([]);

// const onRowClick = (idx: number) => {
//   const selectedRowIdx = selectedRows.value.findIndex((index) => index === idx);
//   if (selectedRowIdx > -1) {
//     selectedRows.value.splice(selectedRowIdx, 1);
//   } else {
//     selectedRows.value.push(idx);
//   }
//   emit("row-click", { selectedRows });
// };
</script>

<style scoped>
tr:hover {
  background-color: rgb(249 250 251);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
