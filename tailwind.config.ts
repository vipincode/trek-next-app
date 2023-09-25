import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '16px',
			screens: {
				'2xl': '1280px',
				'3xl': '1400px',
				'4xl': '1536px',
			},
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
export default config
