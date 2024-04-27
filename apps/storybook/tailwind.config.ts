import type { Config } from "tailwindcss"

import TypograhiesPreset from '@tss-next-ui/typographies/tailwind.config'

const config: Config = {
  presets: [TypograhiesPreset],
  content: [
    "./node_modules/@tss-next-ui/**/src/*.{ts,tsx}"
  ]
}

export default config
