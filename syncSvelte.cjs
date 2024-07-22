const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')

/**
 * @type {esbuild.BuildOptions}
 */
const config = {
    entryPoints: ['custom-components/cards/cardsSetup.js'],
    bundle: true,
    conditions: ['svelte', 'browser'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    outfile: 'blocks/cards/cards.js',
    target: "es2015",
    format: "esm",
    plugins: [sveltePlugin()],
    logLevel: "debug"
}

esbuild.build(config).catch(() => process.exit(1))