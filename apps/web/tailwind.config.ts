import type { Config } from "tailwindcss"

import typographiesPreset from '@tss-next-ui/typographies/tailwind.config'

const config: Config = {
  presets: [typographiesPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tss-next-ui/**/src/*.{js,ts,jsx,tsx,mdx}"
  ]
}

export default config
