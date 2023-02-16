import adapter from "@sveltejs/adapter-auto";
import nodeApdapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        // adapter: nodeApdapter(),
        alias: {
            "@components": "src/components",
            "@stores": "src/stores",
            "@tests": "src/tests",
            "@styles": "src/lib/styles"
        }
    }
};

export default config;

