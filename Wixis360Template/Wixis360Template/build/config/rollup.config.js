import babel from 'rollup-plugin-babel'

const pkg = require('../../package')
const year = new Date().getFullYear()

const globals = {
    jquery: 'jQuery'
}

export default {
    input: 'build/js/wixis360.js',
    output: {
        banner: `/*!
 * wixis360 v${pkg.version} (${pkg.homepage})
 * Copyright 2014-${year} ${pkg.author}
 * Licensed under MIT (https://github.com/ColorlibHQ/wixis360/blob/master/LICENSE)
 */`,
        file: 'dist/js/wixis360.js',
        format: 'umd',
        globals,
        name: 'wixis360'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            externalHelpers: true
        })
    ]
}