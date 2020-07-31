import { TDateString } from "../Component.types";

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

type TScanStatus = "RUNNING" | "FINISHED" | "FAILED";
