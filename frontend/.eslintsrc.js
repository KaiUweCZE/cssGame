module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        map: [
          ["@", "./src"],
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@contexts", "./src/contexts"],
          ["@data", "./src/data"],
          ["@images", "./src/assets/images"],
          ["@pages", "./src/pages"],
          ["@styles", "./src/assets/styles"],
          ["@utils", "./src/utils"],
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "import/no-unresolved": "error",

    // React rules
    //"react/prop-types": "warn",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Import rules
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],

    // JSX rules
    "jsx-a11y/anchor-is-valid": "warn",

    "prefer-const": "warn",
    "no-var": "warn",
  },
};
