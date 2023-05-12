// import { type Config } from 'tailwindcss';

export default config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			//
			'custom-section-height-semi-md': {
				raw: '((max-height: 600px))'
			},
			'custom-section-height-semi-lg': {
				raw: '((max-height: 900px))'
			}
		},
		extend: {
			colors: {
				base: {
					primary: {
						100: 'rgba(var(--clr-base-primary-100) / <alpha-value>)',
						200: 'rgba(var(--clr-base-primary-200) / <alpha-value>)',
						300: 'rgba(var(--clr-base-primary-300) / <alpha-value>)',
						400: 'rgba(var(--clr-base-primary-400) / <alpha-value>)',
						500: 'rgba(var(--clr-base-primary-500) / <alpha-value>)',
						600: 'rgba(var(--clr-base-primary-600) / <alpha-value>)',
						700: 'rgba(var(--clr-base-primary-700) / <alpha-value>)',
						800: 'rgba(var(--clr-base-primary-800) / <alpha-value>)',
						900: 'rgba(var(--clr-base-primary-900) / <alpha-value>)'
					},
					secondary: {
						100: 'rgba(var(--clr-base-secondary-100) / <alpha-value>)',
						200: 'rgba(var(--clr-base-secondary-200) / <alpha-value>)',
						300: 'rgba(var(--clr-base-secondary-300) / <alpha-value>)',
						400: 'rgba(var(--clr-base-secondary-400) / <alpha-value>)',
						500: 'rgba(var(--clr-base-secondary-500) / <alpha-value>)',
						600: 'rgba(var(--clr-base-secondary-600) / <alpha-value>)',
						700: 'rgba(var(--clr-base-secondary-700) / <alpha-value>)',
						800: 'rgba(var(--clr-base-secondary-800) / <alpha-value>)',
						900: 'rgba(var(--clr-base-secondary-900) / <alpha-value>)'
					}
				},
				special: {
					primary: {
						100: 'rgba(var(--clr-special-primary-100) / <alpha-value>)',
						200: 'rgba(var(--clr-special-primary-200) / <alpha-value>)',
						300: 'rgba(var(--clr-special-primary-300) / <alpha-value>)',
						400: 'rgba(var(--clr-special-primary-400) / <alpha-value>)',
						500: 'rgba(var(--clr-special-primary-500) / <alpha-value>)',
						600: 'rgba(var(--clr-special-primary-600) / <alpha-value>)',
						700: 'rgba(var(--clr-special-primary-700) / <alpha-value>)',
						800: 'rgba(var(--clr-special-primary-800) / <alpha-value>)',
						900: 'rgba(var(--clr-special-primary-900) / <alpha-value>)'
					}
				}
			},
			maxWidth: {
				'main-max-w': 'var(--main-max-w)'
			}
		}
	},
	plugins: [],
	extend: {
		fontFamily: {
			'montserrat-alternates': ['var(--font-montserrat-alternates)'],
			roboto: ['var(--font-roboto)']
		}
	}
}; // satisfies Config;
