import path from 'node:path'

import type { StorybookConfig } from "@storybook/nextjs"
import type { StoriesEntry } from '@storybook/types'
import { generateDirectoryPaths } from '@tss-next/helper'


function generateStories(dir: string, titlePrefix: string) {
  return generateDirectoryPaths<StoriesEntry>((dirname: string, dir: string) => ({
    directory: path.join(dirname, dir),
    files: 'stories/*.stories.@(ts|tsx)',
    titlePrefix
  }), [__dirname, dir])
}

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: [
    ...generateStories('../node_modules/@tss-next-ui', 'components'),
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