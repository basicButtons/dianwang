/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
const plugins = [[withLess, { lessLoaderOptions: {} }]];
module.exports = withPlugins(plugins, nextConfig);
