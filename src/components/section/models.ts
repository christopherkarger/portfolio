import { ReactNode } from "react";

export interface ISection {
  headline: string;
  emoji?: string;
  emojiClassName?: string;
  fullscreen?: boolean;
  children?: ReactNode;
}
