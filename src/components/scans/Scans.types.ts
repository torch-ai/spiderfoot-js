import { TDateString } from "../Component.types";

export type TScanStatus = "RUNNING" | "FINISHED" | "FAILED";
export type TScanResult = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  number
];
export interface IScan {
  id: string;
  name?: string;
  target: string;
  requested: TDateString;
  started?: TDateString;
  finished?: TDateString;
  status: TScanStatus;
  elements: number;
}

export type TScanSummaryItemsResult = [string, string, string, number, number];
export interface IScanSummaryItems {
  type: string;
  name: string;
  lastDataElement: TDateString;
  totalElements: number;
  uniqueElements: number;
}
