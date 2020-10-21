const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const loaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
    },
    {
        // SASS/SCSS Modules
        // For componentised styling
        test: /\.module\.s(a|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    localsConvention: "camelCaseOnly",
                    sourceMap: false,
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: false,
                },
            },
        ],
    },
    {
        // Normal SASS/SCSS files (excluding modules)
        // More for global styling
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: "sass-loader",
                options: {
                    sourceMap: false,
                },
            },
        ],
    },
    {
        // Uses url-loader to return link referencing the file unconditionally
        test: /\.(gif|png|jpe?g)$/,
        loader: "url-loader",
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: "url-loader",
                options: {
                    limit: 1000,
                    fallback: {
                        loader: "file-loader",
                        options: {
                            name: "[sha512:hash:base64:7].[ext]",
                        },
                    },
                },
            },
        ],
    },
];

const extensions = [
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".json",
    ".scss",
    ".gif",
    ".png",
    ".jpg",
    ".jpeg",
    ".svg",
];

module.exports = {
    entry: {
        main: "./src/",
    },
    module: {
        rules: loaders,
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "[name].[contenthash].js",
    },
    optimization: {
        splitChunks: {},
    },
    resolve: {
        extensions,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Photo Gallery App",
            template: "public/index.html",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        }),
    ],
};
