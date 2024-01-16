// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gateway-dev.berijalan.id', 'assetaudit-dev.berijalan.id'],
    },
    webpack: config => {
        config.resolve.alias.canvas = false
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-inline-loader',
        })
        return config
    },
}

module.exports = nextConfig
