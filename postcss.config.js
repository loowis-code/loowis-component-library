module.exports = {
    plugins: [
        require('@csstools/postcss-global-data')({
            files: ['./src/tokens/breakpoints.css'],
        }),
        require('postcss-custom-media'),
    ],
};
