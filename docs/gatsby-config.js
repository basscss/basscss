const remarkPlugins = [
  require('remark-slug'),
]

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins,
        gatsbyRemarkPlugins: [
          // 'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-plugin-catch-links',
  ]
}
