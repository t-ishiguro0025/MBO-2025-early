import { TextInput } from "@mantine/core";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    />
  );
}
