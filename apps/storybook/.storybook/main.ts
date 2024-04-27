import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: [
    {
      directory: '../node_modules/@tss-next-ui',
      files: '**/stories/*.stories.@(ts|tsx)',
      titlePrefix: 'components'
    }
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  docs: {
    autodocs: 'tag'
  }
}

export default config