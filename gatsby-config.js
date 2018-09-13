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
            name: 'img',
            path: `${__dirname}/src/assets/images/`,
         }
      },
      { // Paginas no utilizado aún.
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'pages',
            path: `${__dirname}/src/pages/`,
         }
      },
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 590,
                     sizeByPixelDensity: true,
                  },
               },
               {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                     wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
               },
               {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                     offsetY: `75`,
                  }
               },
               {
                  resolve: 'gatsby-remark-embed-gist',
                  options: {
                     username: 'dantehemerson'
                  }
               },
               {
                  resolve: 'gatsby-remark-emojis',
                  options: {
                     // Deactivate the plugin globally (default: true)
                     active: true,
                     // Add a custom css class
                     class: 'emoji-icon',
                     // Select the size (available size: 16, 24, 32, 64)
                     size: 64,
                     // Add custom styles
                     styles: {
                        display: 'inline',
                        margin: '0',
                        position: 'relative'
                     }
                  }
               },
               'gatsby-remark-external-links',
               'gatsby-remark-prismjs',
               'gatsby-remark-copy-linked-files',
               'gatsby-remark-smartypants',
            ],
         },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      `gatsby-plugin-catch-links`,
      'gatsby-plugin-sitemap',
      'gatsby-plugin-robots-txt',
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: 'UA-121858272-1',
            head: false,
         },
      },
      'gatsby-plugin-netlify-cms',
      {
         resolve: `gatsby-plugin-netlify`,
         options: {
            mergeSecurityHeaders: true,
            mergeLinkHeaders: true,
            mergeCachingHeaders: true,
            generateMatchPathRewrites: true,
         },
      },
      {
         resolve: `gatsby-plugin-nprogress`,
         options: {
            color: '#dcbb72',
            showSpinner: false
         },
      },
      `gatsby-plugin-offline`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: 'Dante Calderon',
            short_name: 'Dante',
            start_url: '/',
            background_color: '#DFBD83',
            theme_color: '#DFBD83',
            display: 'minimal-ui',
         },
      },
      `gatsby-plugin-styled-components`,
      {
         resolve: 'gatsby-plugin-page-transitions',
         options: {
            transitionTime: 200
         }
      }    
   ],
}
