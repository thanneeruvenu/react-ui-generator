const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
    preset: 'cssnano-preset-default',
});
const flexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
    plugins: [
        autoprefixer,
        cssnano,
        flexbugsFixes,
    ]
};
