import React from 'react'

import Group from '../Group'

const type = [
	'Databases',
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
	'JS MVC Framework'
]
const groups = [
	{
		title: 'Languages',
		items: [
			{ name: 'Javascript', icon: 'javascript-original.svg', background: '#f0db4f', type: type[1], about: 'Lightweight, interpreted, object-oriented language with first-class functions' },
			{ name: 'Python', icon: 'python-original.svg', type: type[1], about: "Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java."},
			{ name: 'C++', icon: 'cplusplus-original.svg', type: type[1], about: "Has imperative, object-oriented and generic programming features, while also providing the facilities for low level memory manipulation"},
			{ name: 'PHP', icon: 'php-original.svg', background: 'white', type: type[1], about: "A popular general-purpose scripting language that is especially suited to web development"},
		]
	},
	{
		title: 'Frontend',
		items: [
			{ name: 'React', icon: 'react-original.svg', background: '#1c1c1c', type: type[3], about: 'A JavaScript library for building user interfaces' },
			{ name: 'Redux', icon: 'redux.svg', background: '#1c1c1c', type: type[3], about: "Predictable state container for JavaScript apps" },
			{ name: 'Gatsby', icon: 'gatsby.png', background: 'white', type: type[11], about: "A Static Site Generator for React"},
			{ name: 'Next.js', icon: 'next.jslogo.svg', background: 'white', type: type[8], about: "A small framework for server-rendered universal JavaScript apps"},
			{ name: 'Angular', icon: 'angularjs-original.svg', type: type[25], about: "Superheroic JS MVC Framework"},
			{ name: 'Wordpress', icon: 'wordpress-plain.svg', background: 'white', type: type[23], about: "A semantic personal publishing platform with a focus on aesthetics, web standards, and usability"},
		]
	},
	{
		title: 'Backed',
		items: [
			{ name: 'Node', icon: 'nodejs-original.svg', type: type[8], about: "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications" },
			{ name: 'Express', icon: 'express-original.svg', background: 'white', type: type[10], about: "Infraestructura web rápida, minimalista y flexible para Node.js" },
			{ name: 'Django', icon: 'django-original.svg', background: '#003a2b', type: type[8], about: "The Web framework for perfectionists with deadlines" },
			{ name: 'MySQL', icon: 'mysql-original-wordmark.svg', background: 'white', type: type[0], about: "The world's most popular open source database" },
			{ name: 'MongoDB', icon: 'mongodb-original.svg', background: '#40474f', type: type[0], about: "The database for giant ideas" },
			{ name: 'PostgreSQL', icon: 'postgresql-original.svg', type: type[0], about: "A powerful, open source object-relational database system" },
			{ name: 'Flask', icon: 'flask.jpg', background: 'white', type: type[10], about: "A microframework for Python based on Werkzeug, Jinja 2 and good intentions." },
			{ name: 'GraphQL', icon: 'graphql.svg', type: type[24], background: "white", about: "A data query language and runtime" },
		]
	},
	{
		title: 'DevOps',
		items: [
			{ name: 'Docker', icon: 'docker-original-wordmark.svg', background: 'white' , type: type[14], about: "An open source project to pack, ship and run any application as a lightweight container"},
			{ name: 'AWS', icon: 'amazonwebservices-original-wordmark.svg', background: 'white', type: type[16] },
			{ name: 'Heroku', icon: 'heroku-plain.png', type: type[7], about: "Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience."},
			{ name: 'Git', icon: 'git-plain.svg', background: 'white', type: type[13], about: "Fast, scalable, distributed revision control system" },
			{ name: 'Firebase', icon: 'firebase.png', background: '#039be6', type: type[9], about: "The Realtime App Platform" },
			{ name: 'Nginx', icon: 'nginx-original.svg', background: '#333', type: type[2] },
			{ name: 'Apache', icon: 'apache-original-wordmark.svg', background: 'white', type: type[2] },
			{ name: 'Travis CI', icon: 'travisci.png', type: type[17], about: "A hosted continuous integration service for open source and private projects" },
			{ name: 'Circle CI', icon: 'circleci.svg', background: 'white', type: type[17], about: "CircleCI’s continuous integration and delivery platform helps software teams rapidly release code with confidence." },
			//{ name: 'Github', icon: 'github-original.svg', background: 'white', type: type[12], about: "Powerful collaboration, review, and code management for open source and private development projects." },
		]
	},
	{
		title: 'Utilities',
		items: [
			{ name: 'Webpack', icon: 'webpack-original.svg', background: 'white', type: type[18], about: "A bundler for javascript and friends." },
			{ name: 'Linux', icon: 'linux-original.svg', type: type[6] },
			{ name: 'Slack', icon: 'slack-original.svg', background: 'white', type: type[22], about: "Slack brings all your communication together in one place" },
			{ name: 'Trello', icon: 'trello.png', background: '#007fc9', type: type[21], about: "Your entire project, in a single glance."},
			{ name: 'Sublime Text', icon: 'sublime-text-3.png', background: '#474747', type: type[15], about: "A sophisticated text editor for code, markup and prose." },
			{ name: 'VIM', icon: 'vim-original.svg', type: type[15], about: "Highly configurable text editor built to enable efficient text editing" },
			//{ name: 'Ubuntu', icon: 'ubuntu-plain.svg', background: 'white', type: type[6], about: "The leading OS for PC, tablet, phone and cloud" },
			//{ name: 'Debian', icon: 'debian-plain.svg', background: 'white', type: type[6], about: "The Universal Operating System" },
		]
	}
]

export default props => (
		<div className='Stack'>
			<div className="">
				<h2 className="Page__title">Mi Stack</h2>
				{/*
				<p className="About__description Page__description">
					Hola,  soy Dante Calderón y programo en Python, por que Python es cool.
				</p>
			*/}
			</div>
			{
				groups.map((group, index) => <Group key={index} group={group} />)
			}
	</div>
)