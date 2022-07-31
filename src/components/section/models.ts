import { ReactNode } from "react";

export interface ISection {
  headline: string;
  fullscreen?: boolean;
  children?: ReactNode;
}
