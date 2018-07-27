import Typography from 'typography'

const typography = new Typography({
	headerFontFamily: ['Playfair Display', 'sans-serif'],
	bodyFontFamily: ['Open Sans', 'sans-serif'],
	//PT Serif
	// Open Sans
	// Merriweather
	// 
	overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({	  
	  blockquote: {
	    ...adjustFontSizeTo('19px'),	    
	    fontStyle: 'italic',
	    paddingLeft: rhythm(13/16),
	    marginLeft: rhythm(0),
	    borderLeft: `${rhythm(3/16)} solid #991212`,
	  },
	  'blockquote > :last-child': {
	    marginBottom: 0,
	  },
	})
})

export default typography