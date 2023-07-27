export type Variant = "primary" | "secondary";

export interface ISvgProps {
  width?: number;
  height?: number;
  fillClass?: string;
  stroke?: string;
}

export enum RowStatuses {
  Completed = "Completed",
  Todo = "Todo",
  InProgress = "InProgress",
}
