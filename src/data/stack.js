const type = [
  'Database',
  'Language',
  'Web Server',
  'Javascript UI Librarie',
  'Cloud Hosting',
  'CSS Pre-processor',
  'Operating System',
  'Platform as a Service',
  'Framework (Full Stack)',
  'Realtime Backend/API',
  'Microframework (Backend)',
  'Static Site Generator',
  'Code Collaboration & VCS',
  'Version Control System',
  'Virtual Machine Platforms and containers',
  'Text Editor',
  'Infrastructure as a service',
  'Continuous Integration',
  'JS Build Tool/JS Task Runner',
  'Javascript Compiler',
  'JS Testing Framework',
  'Project Management',
  'Group Chat & Notifications',
  'CMS',
  'Query Languages',
  'JS MVC Framework',
  'Cloud Content Management System',
  'Command Language',
  'Templating Languages & Extensions'
]

const groups = [
  {
    title: 'Languages',
    items: [
      {
        url: 'https://google.com',
        name: 'JavaScript',
        icon: 'javascript-original.svg',
        background: '#f0db4f',
        type: type[1],
        about: 'Lightweight, interpreted, object-oriented language with first-class functions'
      },
      {
        url: 'https://google.com',
        name: 'TypeScript',
        icon: 'typescript.svg',
        type: type[28],
        about: 'A superset of JavaScript that compiles to clean JavaScript output'
      },
      {
        url: 'https://google.com',
        name: 'C++',
        icon: 'cplusplus-original.svg',
        type: type[1],
        about: 'Has imperative, object-oriented and generic programming features, while also providing the facilities for low level memory manipulation'
      },
      {
        url: 'https://google.com',
        name: 'Python',
        icon: 'python-original.svg',
        type: type[1],
        about: 'Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.'
      },
      {
        url: 'https://google.com',
        name: 'Go',
        icon: 'go.svg',
        type: type[1],
        about: 'An open source programming language that makes it easy to build simple, reliable, and efficient software'
      }
    ]
  },
  {
    title: 'Testing',
    items: [
      {
        url: 'https://google.com',
        name: 'Mocha',
        icon: 'mocha-plain.svg',
        background: 'white',
        type: type[20],
        about: 'Simple, flexible, fun javascript test framework for node.js & the browser'
      },
      { url: 'https://google.com', name: 'Jest', icon: 'jest.png', background: 'white', type: type[20], about: 'Painless JavaScript Unit Testing' }
    ]
  },
  {
    title: 'Frontend',
    items: [
      {
        url: 'https://google.com',
        name: 'React',
        icon: 'react-original.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'A JavaScript library for building user interfaces'
      },
      {
        url: 'https://google.com',
        name: 'Redux',
        icon: 'redux.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'Predictable state container for JavaScript apps'
      },
      { url: 'https://google.com', name: 'Gatsby', icon: 'gatsby.png', background: 'white', type: type[11], about: 'A Static Site Generator for React' },
      {
        url: 'https://google.com',
        name: 'Next.js',
        icon: 'next.jslogo.svg',
        background: 'white',
        type: type[8],
        about: 'A small framework for server-rendered universal JavaScript apps'
      },
      { url: 'https://google.com', name: 'Vue · Vuex · Nuxt.js', icon: 'vuejs.svg', type: type[3], about: 'Reactive Components for Modern Web Interfaces' }
      //{ url: 'https://google.com', name: 'Wordpress', icon: 'wordpress-plain.svg', background: 'white', type: type[23], about: "A semantic personal publishing platform with a focus on aesthetics, web standards, and usability"},
      //{ url: 'https://google.com', name: 'Contentful', icon: 'contentful.png', background: 'black', type: type[26], about: "Manage content once, publish it anywhere"},
    ]
  },
  {
    title: 'Backend',
    items: [
      {
        url: 'https://google.com',
        name: 'Node',
        icon: 'nodejs-original.svg',
        type: type[8],
        about: "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
      },
      {
        url: 'https://google.com',
        name: 'Express',
        icon: 'express-original.svg',
        background: 'white',
        type: type[10],
        about: 'Infraestructura web rápida, minimalista y flexible para Node.js'
      },
      {
        url: 'https://google.com',
        name: 'NestJS',
        icon: 'nestjs.svg',
        type: type[8],
        about: 'A progressive Node.js framework for building efficient and scalable server-side applications'
      },
      //{ url: 'https://google.com', name: 'Django', icon: 'django-original.svg', background: '#003a2b', type: type[8], about: "The Web framework for perfectionists with deadlines" },
      {
        url: 'https://google.com',
        name: 'MySQL',
        icon: 'mysql-original-wordmark.svg',
        background: 'white',
        type: type[0],
        about: "The world's most popular open source database"
      },
      { url: 'https://google.com', name: 'MongoDB', icon: 'mongodb-original.svg', background: '#40474f', type: type[0], about: 'The database for giant ideas' },
      {
        url: 'https://google.com',
        name: 'PostgreSQL',
        icon: 'postgresql-original.svg',
        type: type[0],
        about: 'A powerful, open source object-relational database system'
      },
      //{ url: 'https://google.com', name: 'Flask', icon: 'flask.jpg', background: 'white', type: type[10], about: "A microframework for Python based on Werkzeug, Jinja 2 and good intentions." },
      { url: 'https://google.com', name: 'GraphQL', icon: 'graphql.svg', type: type[24], background: 'white', about: 'A data query language and runtime' },
      {
        url: 'https://google.com',
        name: 'Apollo',
        icon: 'apollo.svg',
        type: type[7],
        background: 'white',
        about: 'GraphQL server for Express, Connect, Hapi, Koa and more'
      },
      { url: 'https://google.com', name: 'Firebase', icon: 'firebase.png', background: '#039be6', type: type[9], about: 'The Realtime App Platform' },
      {
        url: 'https://serverless.com/',
        name: 'Serverless (Learning...)',
        icon: 'serverless.svg',
        background: '#1e1e1e',
        type: type[9],
        about: 'The most widely-adopted toolkit for building serverless applications'
      }
    ]
  },
  {
    title: 'DevOps',
    items: [
      {
        url: 'https://google.com',
        name: 'Docker',
        icon: 'docker-original-wordmark.svg',
        background: 'white',
        type: type[14],
        about: 'An open source project to pack, ship and run any application as a lightweight container'
      },
      { url: 'https://google.com', name: 'AWS', icon: 'amazonwebservices-original-wordmark.svg', background: 'white', type: type[16] },
      {
        url: 'https://google.com',
        name: 'Heroku',
        icon: 'heroku-plain.png',
        type: type[7],
        about: 'Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience.'
      },

      //{ url: 'https://google.com', name: 'Nginx', icon: 'nginx-original.svg', background: '#333', type: type[2] },
      { url: 'https://google.com', name: 'Apache', icon: 'apache-original-wordmark.svg', background: 'white', type: type[2] },
      {
        url: 'https://google.com',
        name: 'Travis CI',
        icon: 'travisci.png',
        type: type[17],
        about: 'A hosted continuous integration service for open source and private projects'
      },
      {
        url: 'https://google.com',
        name: 'Circle CI',
        icon: 'circleci.svg',
        background: 'white',
        type: type[17],
        about: 'CircleCI’s continuous integration and delivery platform helps software teams rapidly release code with confidence.'
      },
      { url: 'https://google.com', name: 'Bash', icon: 'bash_shell.png', type: type[27], about: 'Bourne Again SHell.' }
      //{ url: 'https://google.com', name: 'Github', icon: 'github-original.svg', background: 'white', type: type[12], about: "Powerful collaboration, review, and code management for open source and private development projects." },
    ]
  },
  {
    title: 'Utilities',
    items: [
      {
        url: 'https://google.com',
        name: 'Git',
        icon: 'git-plain.svg',
        background: 'white',
        type: type[13],
        about: 'Fast, scalable, distributed revision control system'
      },
      {
        url: 'https://google.com',
        name: 'Webpack',
        icon: 'webpack-original.svg',
        background: 'white',
        type: type[18],
        about: 'A bundler for javascript and friends.'
      },
      { url: 'https://google.com', name: 'Linux', icon: 'linux-original.svg', type: type[6], about: 'My favourite OS' },
      {
        url: 'https://google.com',
        name: 'Slack',
        icon: 'slack-original.svg',
        background: 'white',
        type: type[22],
        about: 'Slack brings all your communication together in one place'
      },
      {
        url: 'https://google.com',
        name: 'Trello',
        icon: 'trello.png',
        background: '#007fc9',
        type: type[21],
        about: 'Your entire project, in a single glance.'
      }
      //{ url: 'https://google.com', name: 'Sublime Text', icon: 'sublime-text-3.png', background: '#474747', type: type[15], about: "A sophisticated text editor for code, markup and prose." },
      //{ url: 'https://google.com', name: 'VIM', icon: 'vim-original.svg', type: type[15], about: "Highly configurable text editor built to enable efficient text editing" },
      //{ url: 'https://google.com', name: 'Ubuntu', icon: 'ubuntu-plain.svg', background: 'white', type: type[6], about: "The leading OS for PC, tablet, phone and cloud" },
      //{ url: 'https://google.com', name: 'Debian', icon: 'debian-plain.svg', background: 'white', type: type[6], about: "The Universal Operating System" },
    ]
  }
]

export default groups
