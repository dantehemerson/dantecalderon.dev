import React from 'react'

import Facebook from '../../assets/images/icons/facebook.svg'
import Twitter from '../../assets/images/icons/twitter.svg'
import Linkedin from '../../assets/images/icons/linkedin.svg'
import Comment from '../../assets/images/icons/comment.svg'

export default (props) => (
		<div className={`Share ` 
			+ (props.fixed ? "Share--fixed" : "") 
			+ (props.show ? "" : " hide")}>				
			<a href="#disquser" >
				<img className="Share__icon" title="Comentar" src={Comment}
				/>
			</a>				
			<a href="http://www.facebook.com/sharer.php?u=https://dantecalderon.com" target="_blank">
				<img className="Share__icon" title="Compartir en Twitter" src={Twitter}
				/>
			</a>	
			<a href="https://www.facebook.com"  target="_blank">
				<img className="Share__icon" title="Compartir en Facebook" src={Facebook}
				/>
			</a>
			<a href="https://www.facebook.com" target="_blank">
				<img className="Share__icon" title="Compartir en Linkedin" src={Linkedin}
				/>
			</a>
	</div>
)