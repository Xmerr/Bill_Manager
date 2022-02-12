const customWebpackConfig = require('../config/webpack/custom');

module.exports = {
    stories: [
        '../app/javascript/**/*.stories.mdx',
        '../app/javascript/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/preset-scss'],
    framework: '@storybook/react',
    features: {
        emotionAlias: false,
    },
    webpackFinal: config => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    ...customWebpackConfig.resolve.alias,
                },
            },
        };
    },
};
