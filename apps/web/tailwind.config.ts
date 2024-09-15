import type { Config } from "tailwindcss"

import { generateTailwindContents } from '@tss-next/helper'
import typographiesPreset from '@tss-next-ui/typographies/tailwind.config'

const config: Config = {
  presets: [typographiesPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    ...generateTailwindContents(__dirname, "./node_modules/@tss-next-ui")
  ]
}

export default config
