const BABEL_LOADER = {
    loader: 'babel-loader'
};

const CSS_LOADER = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
    }
};

const LESS_LOADER = {
    loader: 'less-loader'
};

module.exports = {
    BABEL_LOADER,
    CSS_LOADER,
    LESS_LOADER
}
