import { deploymentEnv, routes, type VercelConfig } from "@vercel/config/v1";

const TARGET_URL = deploymentEnv("TARGET_URL") ?? "https://receiver-nine.vercel.app";

export const config: VercelConfig = {
  routes: [
    routes.rewrite("/(.*)", `${TARGET_URL}/$1`, {
      has: [{ type: "host", value: "(?<host>.*)" }],
      requestHeaders: {
        "x-mintlify-host": "$host",
      },
    }),
  ],
};
