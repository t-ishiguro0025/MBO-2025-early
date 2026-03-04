import { PasswordInput } from "@mantine/core";
import type { ChangeEvent } from "react";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function PasswordField({ value, onChange, error }: Props) {
  return (
    <PasswordInput
      label="パスワード"
      placeholder="8文字以上"
      value={value}
      onChange={onChange}
      error={error}
      name="password"
      autoComplete="current-password"
    />
  );
}
