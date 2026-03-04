import { EmailField } from "@/features/auth";
import { PasswordField } from "@/features/auth";

export default function LoginPage() {
  return (
    <div>
      <EmailField value="" onChange={() => {}} />
      <PasswordField value="" onChange={() => {}} />
    </div>
  );
}
