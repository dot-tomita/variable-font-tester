import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      prependData: `
        @import 'src/styles/foundation/foundation.scss';
      `
    },
    postcss: true
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      base: `/${process.env.npm_package_name}`,
      assets: `/${process.env.npm_package_name}`
    },
  }
};

export default config;
