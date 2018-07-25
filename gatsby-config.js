module.exports = {
  siteMetadata: {
    title: 'Dante Calderón',
    author: 'Dante Calderón',
    description: 'Dante Hemerson Calderón Vasquez, Programmer',
    siteUrl: 'https://dantecalderon.com'
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			}
			
		},
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms',
  ],
}
