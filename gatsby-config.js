module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Dante Calderón',
    subtitle: 'Javascript / Node.js Developer',
    description: `Hi, I'm Dante Calderón, I am passionate about Nodejs.`,
    siteUrl: 'https://dantecalderon.dev',
    disqusShortname: 'dantecalderon',
    social: [
      { title: 'Github', link: 'https://github.com/dantehemerson', icon: 'github' },
      { title: 'Twitter', link: 'https://twitter.com/dantehemerson', icon: 'twitter' },
      { title: 'Linkedin', link: 'https://linkedin.com/in/dantehemerson', icon: 'linkedin' },
      { title: 'Medium', link: 'https://medium.com/@dantehemerson', icon: 'medium' },
      //{ title: 'Dev', link: 'https://dev.to/dantehemerson',  icon: 'dev' },
      { title: 'Dev', link: 'https://instagram.com/dantehemerson', icon: 'dev' },
      { title: 'StackOverflow', link: 'https://instagram.com/dantehemerson', icon: 'stack-overflow' },
      { title: 'Goodreads', link: 'https://instagram.com/dantehemerson', icon: 'instagram' },
      { title: 'FreeCodeCamp', link: 'https://instagram.com/dantehemerson', icon: 'free-code-camp' },
      { title: 'Gitlab', link: 'https://instagram.com/dantehemerson', icon: 'gitlab' },
      { title: 'Angellist', link: 'https://angel.co/dantehemerson', icon: 'angellist' },
      { title: 'Codepen', link: 'https://codepen.io/dantehemerson', icon: 'codepen' },
      { title: 'Meetup', link: 'https://www.meetup.com/es/members/256853185/', icon: 'meetup' },
      { title: 'Pinterest', link: 'https://www.pinterest.com/dantehemerson/', icon: 'pinterest' },
      { title: 'Steam', link: 'https://steamcommunity.com/id/dantehemerson/', icon: 'steam' },
      { title: 'Twitch', link: 'https://www.twitch.tv/dantehemerson', icon: 'twitch' },
      { title: 'Youtube', link: 'https://www.youtube.com/channel/UCCbtGSRgh1RFYysgaZkoE0A', icon: 'youtube-play' }
    ],
    menu: [
      { title: 'Home', id: '', to: '/', icon: 'home' },
      { title: 'Blog', id: 'Blog', to: '/blog', icon: 'home' },
      { title: 'About', id: 'About', to: '/about', icon: 'home' },
      { title: 'Portfolio', id: 'Portfolio', to: '/portfolio', icon: 'home' }
      //{ title: 'Contact', id: 'Contact', to: '/contact', icon: 'home' }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      // All images from assets folder. For use in website.
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      // All images for Markdown pages. For use in generated posts, projects.
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img/`
      }
    },
    {
      // Markdown pages: posts and projects folder
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
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
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `75`
            }
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
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
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALITYCS_ID,
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'dantecalderon.com',
        cookieName: 'gaDanteCalderon',
        cookieExpires: 86400
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1976d2',
        showSpinner: false
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dante Calderón',
        short_name: 'Dante',
        start_url: '/',
        background_color: '#1976d2',
        theme_color: '#1976d2',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
