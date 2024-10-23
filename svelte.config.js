import adapter from '@sveltejs/adapter-auto';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		outDir: 'dist',
	},
	base: './'
};

export default config;
