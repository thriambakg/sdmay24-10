//import adapter from '@sveltejs/adapter-auto';
// import adapter from "svelte-kit-sst"
// import { vitePreprocess } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
//code 4-19 start
import { defineConfig } from 'vite';
//code 4-19 end

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
    		adapter: adapter({
    			// default options are shown. On some platforms
    			// these options are set automatically — see below
    			pages: 'build',
    			assets: 'build',
    			fallback: undefined,
    			precompress: false,
    			strict: true
    		}),
        // code 4-19 start
    prerender: {
      // Implement handleHttpError to suppress or handle errors
      handleHttpError: async ({ request, resolve, render }) => {
        const response = await resolve(request);
        if (response) {
          return response;
        }

        return render(request);
      },
    },
        // code 4-19 end
    	}
};

export default config;
