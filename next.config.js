const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true
})

module.exports = {
  images: {
    domains: [
      'images.prismic.io',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (_config) => {
    const config = _config
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    })
    return config
  },
}
