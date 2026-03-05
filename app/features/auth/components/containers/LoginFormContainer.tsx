import { useState } from "react";
import { loginSchema } from "../../schemas/loginSchema";
import { useNavigate } from "react-router";
import { LoginForm } from "../presentational/LoginForm";

export function LoginFormContainer() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onSubmit = async () => {
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        setApiError(data.message);
        return;
      }
      navigate("/logs");
    } catch (error) {
      setApiError("データの送信に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <LoginForm
        formValue={{ email: email, password: password }}
        isLoading={isLoading}
        apiError={apiError ?? undefined}
        fieldErrors={fieldErrors}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />
    </form>
  );
}
