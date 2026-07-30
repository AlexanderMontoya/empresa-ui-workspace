import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../projects/empresa-ui/src/lib/**/*.stories.ts"
  ],
  "addons": [],
  "framework": "@storybook/angular"
};
export default config;