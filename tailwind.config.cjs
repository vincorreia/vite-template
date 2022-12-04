/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#F69A1D',
				secondary: '#ECDCC7',
				leaf: '#A6B978'
			},
			borderWidth: {
				xxs: '1px'
			}
		}
	},
	plugins: []
}
