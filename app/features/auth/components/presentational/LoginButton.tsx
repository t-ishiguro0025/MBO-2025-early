import { Button } from "@mantine/core";

type Props = {
  isLoading: boolean;
};
export function LoginButton({ isLoading }: Props) {
  return <Button loading={isLoading}>ログイン</Button>;
}
