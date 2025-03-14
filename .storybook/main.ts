import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-console",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/nextjs",
  docs: {
    autodocs: "tag",
  },
};

export default config;
