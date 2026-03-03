import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/login", "routes/_auth/login.tsx"),
] satisfies RouteConfig;
