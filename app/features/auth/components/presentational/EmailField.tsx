import { TextInput } from "@mantine/core";
import type { ChangeEvent } from "react";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function EmailField({ value, onChange, error }: Props) {
  return (
    <TextInput
      label="メールアドレス"
      placeholder="study@example.com"
      value={value}
      onChange={onChange}
      error={error}
      name="email"
      autoComplete="email"
    />
  );
}
