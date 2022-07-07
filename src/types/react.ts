/**
 * Typovani pro react
 */

import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PropsWithChildren {
  children: ReactNode;
}

export type ReactDispatch<T> = Dispatch<SetStateAction<T>>;
