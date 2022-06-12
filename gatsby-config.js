module.exports = {
  siteMetadata: {
    siteUrl: "https://www.flgloball.com",
    title: "Fl Global Logistics",
    description: "Empresa de transporte logistico",
    image: "/images/logo_footer_1.png"
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};
