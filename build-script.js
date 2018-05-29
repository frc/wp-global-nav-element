const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/wordpressGlobalNav/runtime.js',
        './dist/wordpressGlobalNav/polyfills.js',
        './dist/wordpressGlobalNav/scripts.js',
        './dist/wordpressGlobalNav/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/wp-global-nav.js')
    console.info('Elements created successfully!')

})()