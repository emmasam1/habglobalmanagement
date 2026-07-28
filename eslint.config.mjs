import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Natural-language consultancy copy contains many contractions. Escaping
      // apostrophes in JSX does not improve runtime safety or accessibility.
      "react/no-unescaped-entities": "off",
      // These effects initiate asynchronous API synchronization; state updates
      // occur after the request resolves, not during render.
      "react-hooks/set-state-in-effect": "off",
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
