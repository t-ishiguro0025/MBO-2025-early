import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/_auth/layout.tsx", [
    route("/login", "routes/_auth/login.tsx"),
  ]),
  layout("routes/_app/layout.tsx", [
    route("/logs", "routes/_app/logs.tsx"),
  ]),
] satisfies RouteConfig;
