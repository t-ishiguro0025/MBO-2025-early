import { HttpResponse, http } from "msw";

const MOCK_USER = {
  id: "user-001",
  name: "テストユーザー",
  email: "study@example.com",
};

const VALID_CREDENTIALS = {
  email: "study@example.com",
  password: "password123",
};

export const authHandlers = [
  http.post("/api/auth/login", async ({ request }: { request: Request }) => {
    const body = (await request.json()) as { email: string; password: string };

    if (
      body.email === VALID_CREDENTIALS.email &&
      body.password === VALID_CREDENTIALS.password
    ) {
      return HttpResponse.json({
        token: "mock-token-xxx",
        user: MOCK_USER,
      });
    }

    return HttpResponse.json(
      { message: "メールアドレスまたはパスワードが正しくありません" },
      { status: 401 },
    );
  }),
];
