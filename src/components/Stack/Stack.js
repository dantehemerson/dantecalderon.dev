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
	'CMS'
]
const groups = [
	{
		title: 'Languages',
		items: [
			{ name: 'Javascript', icon: 'javascript-original.svg', background: '#f0db4f', type: type[1] },
			{ name: 'Python', icon: 'python-original.svg', type: type[1]},
			{ name: 'C++', icon: 'cplusplus-original.svg', type: type[1]},
		]
	},
	{
		title: 'Frontend',
		items: [
			{ name: 'React', icon: 'react-original.svg', background: '#1c1c1c', type: type[3] },
			{ name: 'Redux', icon: 'redux.svg', background: '#1c1c1c', type: type[3] },
			{ name: 'Wordpress', icon: 'wordpress-plain.svg', background: 'white', type: type[23]},
			{ name: 'Gatsby', icon: 'gatsby.png', background: 'white', type: type[11]},
		]
	},
	{
		title: 'Backed',
		items: [
			{ name: 'Django', icon: 'django-original.svg', background: '#003a2b', type: type[8] },
			{ name: 'Express', icon: 'express-original.svg', background: 'white', type: type[10] },
			{ name: 'PostgreSQL', icon: 'postgresql-original.svg', type: type[0] },
			{ name: 'MongoDB', icon: 'mongodb-original.svg', background: '#40474f', type: type[0] },
			{ name: 'MySQL', icon: 'mysql-original-wordmark.svg', background: 'white', type: type[0] },
			{ name: 'Flask', icon: 'flask.jpg', background: 'white', type: type[10] },
			{ name: 'Node', icon: 'nodejs-original.svg', type: type[8] },
		]
	},
	{
		title: 'DevOps',
		items: [
			{ name: 'AWS', icon: 'amazonwebservices-original-wordmark.svg', background: 'white', type: type[16] },
			{ name: 'Heroku', icon: 'heroku-plain.svg', background: 'white' , type: type[7]},
			{ name: 'Firebase', icon: 'firebase.png', background: '#039be6', type: type[9] },
			{ name: 'Docker', icon: 'docker-original-wordmark.svg', background: 'white' , type: type[14]},
			{ name: 'Nginx', icon: 'nginx-original.svg', background: 'white', type: type[2] },
			{ name: 'Apache', icon: 'apache-original-wordmark.svg', background: 'white', type: type[2] },
			{ name: 'Github', icon: 'github-original.svg', background: 'white', type: type[12] },
			{ name: 'Git', icon: 'git-plain.svg', background: 'white', type: type[13] },
			{ name: 'Travis CI', icon: 'travisci.png', type: type[17] },
			{ name: 'Circle CI', icon: 'circleci.svg', background: 'white', type: type[17] },
		]
	},
	{
		title: 'Utilities',
		items: [
			{ name: 'VIM', icon: 'vim-original.svg', type: type[15] },
			{ name: 'Slack', icon: 'slack-original.svg', background: 'white', type: type[22] },
			{ name: 'Trello', icon: 'trello.png', background: '#007fc9', type: type[21] },
			{ name: 'Sublime Text', icon: 'sublime-text-3.png', background: '#474747', type: type[15] },
			{ name: 'Linux', icon: 'linux-original.svg', type: type[6] },
			{ name: 'Ubuntu', icon: 'ubuntu-plain.svg', background: 'white', type: type[6] },
			{ name: 'Debian', icon: 'debian-plain.svg', background: 'white', type: type[6] },
		]
	}
]

export default props => (
	<div className='Stack'>
		{
			groups.map((group, index) => <Group key={index} group={group} />)
		}
	</div>
)