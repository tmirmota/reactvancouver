module.exports = {
  siteMetadata: {
    title: 'React Vancouver',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '019o3pe3du31',
        accessToken:
          'ede76a7cd0de9ecd143668c44ead2ef2a642e85f2ea6d6c4ac206f4478556174',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-remark',
    'gatsby-plugin-eslint',
  ],
}
