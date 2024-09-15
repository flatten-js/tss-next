import type { Config } from "tailwindcss"

import { generateTailwindContents } from '@tss-next/helper'
import TypograhiesPreset from '@tss-next-ui/typographies/tailwind.config'


const config: Config = {
  presets: [TypograhiesPreset],
  content: [
    ...generateTailwindContents(__dirname, "./node_modules/@tss-next-ui")
  ]
}

export default config
