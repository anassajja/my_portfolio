// File: next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files`,
          },
        },
      ],
    });

    return config;
  },
};
