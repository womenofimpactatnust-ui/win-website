import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@supabase/supabase-js",
              message:
                "Do not import @supabase/supabase-js directly. Use lib/supabase/client.ts or lib/supabase/server.ts, and access data via lib/services + lib/repositories.",
            },
            {
              name: "@supabase/ssr",
              message:
                "Do not import @supabase/ssr directly. Use lib/supabase/client.ts or lib/supabase/server.ts, and access data via lib/services + lib/repositories.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["lib/supabase/**/*.ts", "lib/supabase/**/*.tsx"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
