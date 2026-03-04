import { Alert } from "@mantine/core";

type Props = {
  message?: string;
};

export function ApiErrorAlert({ message }: Props) {
  return message ? <Alert>{message}</Alert> : null;
}
