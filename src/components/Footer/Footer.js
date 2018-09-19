import React from 'react'

export default props => (
	<footer className="Footer">
		<div className="Footer__social">
			<a rel="noopener noreferrer" lassName="Footer__icon" target="_blank" href="https://www.github.com/dantehemerson">
				<img alt="img" className="Footer__icon__img" src="https://icongr.am/fontawesome/github.svg?size=20&color=282a2d"/>
			</a>
			<a rel="noopener noreferrer" className="Footer__icon" target="_blank" href="https://twitter.com/dantehemerson">
				<img alt="img" className="Footer__icon__img" src="https://icongr.am/fontawesome/twitter.svg?size=20&color=282a2d"/>
			</a>
			<a rel="noopener noreferrer" className="Footer__icon" target="_blank" href="https://www.linkedin.com/in/dantehemerson">
				<img alt="img" className="Footer__icon__img" src="https://icongr.am/fontawesome/linkedin.svg?size=20&color=282a2d"/>
			</a>
			<a rel="noopener noreferrer" className="Footer__icon" target="_blank" href="https://www.instagram.com/dantehemerson">
				<img alt="img" className="Footer__icon__img" src="https://icongr.am/fontawesome/instagram.svg?size=20&color=282a2d"/>
			</a>
		</div>
		<div className="Footer__copy">
			<p className="Footer__copytext"> © 2017–2018 . All rights reserved. Made with <span className="Footer__heart">❤</span> by <a href="https://twitter.com/dantehemerson" target="_blank" rel="noopener noreferrer">Dante Calderón</a></p>
		</div>
	</footer>
)