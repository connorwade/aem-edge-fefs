const esbuild = require('esbuild')

/**
 * @type {esbuild.BuildOptions}
 */
const config = {
    entryPoints: ['custom-components/cards/cards.jsx'],
    bundle: true,
    jsx: 'automatic',
    loader: { '.js': 'jsx' },
    outfile: 'blocks/cards/cards.js',
    target: "es2015",
    format: "esm"
}

esbuild.build(config).catch(() => process.exit(1))