import { reactRouter } from '@react-router/dev/vite';
import { sentryReactRouter } from '@sentry/react-router';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((config) => ({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    process.env.SENTRY_AUTH_TOKEN
      ? [
          sentryReactRouter(
            {
              org: process.env.SENTRY_ORG ?? "t.ishiguro",
              project: process.env.SENTRY_PROJECT ?? "MBO-2025-early",
              authToken: process.env.SENTRY_AUTH_TOKEN,
              telemetry: false,
            },
            config,
          ),
        ]
      : [],
  ],
  server: {
    port: 3112,
  },
  /**
   * NOTE: 本番環境はサブディレクトリ配置になるので `BASE_URL` を指定する
   * 例: BASE_URL=/line/neurodiversity/
   * @see https://ja.vite.dev/guide/build#public-base-path
   */
  base: process.env.BASE_URL || "/",
}));
