const path = require('path');

module.exports = {
    entry: {
        './app': './src/app.mjs'
    },
    mode: 'production',
    optimization: {
        minimize: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo'),
        },
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                exclude: /node_modules/,
                            }
                        },
                    },
                ],
            },
        ]
    }
};