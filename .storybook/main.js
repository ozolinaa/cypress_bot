module.exports = {
    stories: ['../__stories__/**/*.stories.mdx', '../__stories__/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    babel: {
        plugins: [
            [
                'babel-plugin-module-resolver',
                {
                    alias: {
                        src: './src',
                    }
                }
            ]
        ]
    },
    webpackFinal: async (config) => {
        //exclude svg from fileLoaderRule
        const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        // need to add loaders for .scss files
        // loaders for ".css" files were already predefined in Storybook default webpack config
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: ['react-svg-loader']
            }
        );
        return config;
    }
};
