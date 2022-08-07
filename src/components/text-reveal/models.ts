import { ReactNode } from "react";

export interface ITextReveal {
  children?: ReactNode;
  revealInView?: boolean;
  revealNow?: boolean;
  className?: string;
}
