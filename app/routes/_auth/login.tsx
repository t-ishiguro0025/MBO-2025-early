import { LoginForm } from "@/features/auth";

export default function LoginPage() {
  return (
    <LoginForm
      formValue={{ email: "", password: "" }}
      isLoading={false}
      apiError={undefined}
      fieldErrors={{}}
      onEmailChange={() => {}}
      onPasswordChange={() => {}}
    />
  );
}
