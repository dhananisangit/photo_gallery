const loaders = [
    {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
    },
];

const extensions = [".js", ".jsx", ".ts", ".tsx", ".json"];

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: loaders,
    },
    output: {
        path: path.join(__dirname, "../../", ".tmp/public/js/dist"),
        filename: "[hash].[name].js",
    },
    optimization: {
        splitChunks: {},
    },
    resolve: {
        extensions,
    },
    plugins: [],
};
