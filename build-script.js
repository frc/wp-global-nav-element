const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/wordpressGlobalNav/runtime-es2015.js',
        './dist/wordpressGlobalNav/polyfills-es2015.js',
        './dist/wordpressGlobalNav/scripts.js',
        './dist/wordpressGlobalNav/main-es2015.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/wp-global-nav.js')
    console.info('Elements created successfully!')

})()