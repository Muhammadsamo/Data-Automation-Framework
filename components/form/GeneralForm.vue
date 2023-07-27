<template>
  <Form
    :validation-schema="validationSchema"
    v-bind="$attrs"
    @submit="onSubmit"
  >
    <div>
      <component
        :is="inputs[control as keyof typeof inputs]"
        v-for="{
          name,
          label,
          as: control,
          rules,
          options,
          ...rest
        } in formSchema"
        :id="name"
        :key="name"
        :container-class-name="containerClasses"
        :name="name"
        :rules="rules"
        :label="label"
        v-bind="rest"
        :options="options"
      >
        <template v-if="options">
          <component
            :is="tag"
            v-for="({ tag, label: text, ...childAttrs }, idx) in options"
            :key="idx"
            v-bind="childAttrs"
            :options="options"
          >
            {{ text }}
          </component>
        </template>
      </component>
    </div>
    <slot name="genralForm-append" />
  </Form>
</template>
<script setup lang="ts">
import { ObjectSchema } from "yup";

export type Control =
  | "TextInput"
  | "TextArea"
  | "SelectInput"
  | "DatePickerInput";
const TextInput = resolveComponent("form/controls/TextInput");
const TextArea = resolveComponent("form/controls/TextArea");
const SelectInput = resolveComponent("form/controls/SelectInput");
const DatePickerInput = resolveComponent("form/controls/DatePickerInput");
interface IOption {
  label: string;
  value: string;
}
export type IFormControl = {
  containerClasses?: string;
  label?: string;
  name: string;
  as: Control;
  rules?: ObjectSchema<any>;

  options?: ({
    tag?: any;
  } & IOption)[];
} & { [key: string]: any };
interface IProps {
  formSchema: IFormControl[];
  validationSchema?: Record<string, any>;
  containerClasses?: string;
}
withDefaults(defineProps<IProps>(), {
  containerClasses: "mb-3",
  validationSchema: undefined,
});

const inputs = {
  TextInput,
  TextArea,
  SelectInput,
  DatePickerInput,
};

const onSubmit = (values: any) => {
  console.log(values);
};
</script>
