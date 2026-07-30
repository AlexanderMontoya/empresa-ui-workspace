import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../projects/empresa-ui/src/lib/**/*.stories.ts"
  ],
  "addons": ['@storybook/addon-docs'],
  "framework": "@storybook/angular"
};
export default config;