import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/_auth/layout.tsx", [
    route("/login", "routes/_auth/login.tsx"),
  ]),
] satisfies RouteConfig;
