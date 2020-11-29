/* eslint-disable no-undef */
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
	purge: [`./components/**/*.js`, `./pages/**/*.js`],
	theme: {
		boxShadow: {
			xs: `0 0 0 1px rgba(var(--color-shadow), 0.05)`,
			sm: `0 1px 2px 0 rgba(var(--color-shadow), 0.05)`,
			default: `0 1px 3px 0 rgba(var(--color-shadow), 0.1), 0 1px 2px 0 rgba(var(--color-shadow), 0.06)`,
			md: `0 4px 6px -1px rgba(var(--color-shadow), 0.1), 0 2px 4px -1px rgba(var(--color-shadow), 0.06)`,
			lg: `0 10px 15px -3px rgba(var(--color-shadow), 0.1), 0 4px 6px -2px rgba(var(--color-shadow), 0.05)`,
			xl: `0 20px 25px -5px rgba(var(--color-shadow), 0.1), 0 10px 10px -5px rgba(var(--color-shadow), 0.04)`,
			'2xl': `0 25px 50px -12px rgba(var(--color-shadow), 0.25)`,
			'3xl': `0 35px 60px -15px rgba(var(--color-shadow), 0.3)`,
			inner: `inset 0 2px 4px 0 rgba(var(--color-shadow), 0.06)`,
			outline: `0 0 0 3px rgba(66, 153, 225, 0.5)`,
			focus: `0 0 0 3px rgba(66, 153, 225, 0.5)`,
			none: `none`,
		},
		extend: {
			screens: {
				'2xl': `1536px`,
			},
			colors: {
				bg: {
					base: `var(--color-bg-base)`,
					lighter: `var(--color-bg-lighter)`,
					darker: `var(--color-bg-darker)`,
					accent: `var(--color-bg-accent)`,
					'accent-darker': `var(--color-bg-accent-darker)`,
				},
				text: {
					base: `var(--color-text-base)`,
					reverse: `var(--color-bg-base)`,
					lighter: `var(--color-text-lighter)`,
					darker: `var(--color-text-darker)`,
					accent: `var(--color-text-accent)`,
				},
				input: {
					bg: `var(--color-input-bg)`,
					placeholder: `var(--color-input-placeholder)`,
					text: `var(--color-input-text)`,
				},
				border: `var(--color-border)`,
				divider: `var(--color-divider)`,
				form: `var(--color-form)`,
				white: `var(--color-white)`,
				offwhite: `var(--color-offwhite)`,
				grey: `var(--color-grey)`,
				black: `var(--color-black)`,
				// blue: `var(--color-blue)`,
				yellow: `var(--color-yellow)`,
				overlay: `rgba(81, 85, 90, .75)`,
			},
			fontFamily: {
				mono: [`IBM Plex Mono`, `monospace`],
				body: [`IBM Plex Mono`, `monospace`],
			},
			minHeight: {
				content: `var(--min-h-content-area)`,
			},
			minWidth: {
				content: `var(--min-w-content-area)`,
			},
			// spacing: {
			// 	17: `4.25rem`,
			// },
			// gridTemplateColumns: {
			// 	lines: `1fr auto 1fr`,
			// },
			// gridTemplateRows: {
			// 	lines: `20px 0`,
			// },
			boxShadow: {
				full: `0 0px 20px 2px rgba(var(--color-shadow), .2)`,
			},
		},
	},
	plugins: [
		require(`@tailwindcss/ui`),
		require(`@tailwindcss/custom-forms`),
		require(`@neojp/tailwindcss-line-clamp-utilities`),
	],
};
