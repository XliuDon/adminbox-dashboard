//craco.config.js
module.exports = {
    style: {
        postcss: [
            require('tailwindcss0'),
            require('autoprefixer')
        ],
    },
};