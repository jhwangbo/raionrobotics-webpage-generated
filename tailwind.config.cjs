/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				noto: ['Noto Sans']
			  }
		}
	},

	plugins: []
};

module.exports = config;
