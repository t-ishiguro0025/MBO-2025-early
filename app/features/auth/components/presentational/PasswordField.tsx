import { PasswordInput } from "@mantine/core";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    />
  );
}
