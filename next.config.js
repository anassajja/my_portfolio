// File: next.config.js

module.exports = {
    assetPrefix: '/_next/static',
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files`,
          },
        }],
      });
      return config;
    },
};  