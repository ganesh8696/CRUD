/**
 *  @type {import('tailwindcss').Config}
 * */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.25rem',
				tablet: '1.5rem',
				laptop: '1.5rem',
				desktop: '1.75rem',
			},
		},
		screens: {
			// Tailwind apply mobile first approach so no need to set up mobile breakpoint
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
		},
		fontFamily: {
			Inter: ['Inter'],
			Merriweather: ['Merriweather'],
			LibreFranklin: ['Libre Franklin'],
		},
		extend: {},
	},
	plugins: [],
}
