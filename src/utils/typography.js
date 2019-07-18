import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Gentium Book Basic', 'serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
})

const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
