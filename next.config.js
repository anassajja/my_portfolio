// File: next.config.js

module.exports = { // eslint-disable-line no-undef
  webpack: (config, { isServer }) => { // eslint-disable-line no-unused-vars
      config.module.rules.push({ // eslint-disable-line no-param-reassign
          test: /\.pdf$/, // eslint-disable-line no-useless-escape
          use: [ // eslint-disable-line no-param-reassign
              {
                  loader: 'file-loader',  // eslint-disable-line no-undef
                  options: { // eslint-disable-line no-undef
                      name: '[path][name].[ext]',   // eslint-disable-line no-undef
                      publicPath: `/_next/static/files`, // eslint-disable-line no-undef
                      outputPath: `${isServer ? '../' : ''}static/files`,   // eslint-disable-line no-undef
                  },
              },
          ],
      });

      return config;
  },
};