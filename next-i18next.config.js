const path = require("path");

module.exports = {
    reactStrictMode: true,
    i18n: {
      //localeDetection: false,
      locales: ['en', 'pt-BR',],
      defaultLocale: 'en',
    },
    localePath: path.resolve("./public/locales"),
  }
  