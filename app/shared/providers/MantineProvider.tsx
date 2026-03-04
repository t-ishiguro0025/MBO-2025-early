import "@mantine/core/styles.css";

import { MantineProvider as BaseMantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function MantineProvider({ children }: Props) {
  return <BaseMantineProvider>{children}</BaseMantineProvider>;
}
