module.exports = {
  staticFileGlobs: [
    "/index.html",
    "/manifest.json",
    "/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
    "/assets/*",
  ],
  navigateFallback: "/index.html",
  navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/],
};
