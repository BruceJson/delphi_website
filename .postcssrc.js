// https://github.com/michael-ciniawsky/postcss-load-config
const variables = require('./src/assets/style/variables.js');

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-cssnext": {
            features: {
                customProperties: {
                    variables: variables
                }
            }
        }
    }
}