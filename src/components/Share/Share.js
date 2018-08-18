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
			<a href={`https://twitter.com/intent/tweet?text=${props.title} by Dante Calderón(@dantehemerson) ${props.url}`}  target="_blank" data-size="large">
				<img className="Share__icon" title="Compartir en Twitter" src={Twitter}
				/>
			</a>
			<a href={`https://www.facebook.com/sharer/sharer.php?
				app_id=2209722672595950
				&sdk=joey				
				&u=${props.url}`
				}
				target="_blank"				
				title={props.title}
				>
					<img className="Share__icon" title="Compartir en Facebook" src={Facebook}
				/>
			</a>						
			<a href={
				`http://www.linkedin.com/shareArticle?url=${props.url}&isFramed=true&lang=es_ES`
			} target="_blank">
				<img className="Share__icon" title="Compartir en Linkedin" src={Linkedin}
				/>
			</a>
	</div>
)