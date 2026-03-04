import { Button } from "@mantine/core";

type Props = {
  isLoading: boolean;
};
export function LoginButton({ isLoading }: Props) {
  return (
    <Button c="dark.9" loading={isLoading} radius={5}>
      ログイン
    </Button>
  );
}
