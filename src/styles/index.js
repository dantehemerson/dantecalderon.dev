import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

import sliderStyles from './slider'

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 576,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const defaultTheme = {
  body: {
    background: 'white',
    color: 'black'
  }
}

export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0 !important;
    padding: 0 !important;
    text-rendering: geometricPrecision;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  .Dyamic-container {
    min-height: 100vh;
  }

  .aws-btn {
    width: auto !important;
    --button-default-height: 44px !important;
    --button-default-font-size: 15px !important;
    --button-default-border-radius: 2px !important;
    --button-horizontal-padding: 41px !important;
    --button-medium-height: 50px !important;

    --button-horizontal-padding: 23px !important;
    --button-raise-level: 4px !important;
    --button-hover-pressure: 1 !important;
    --transform-speed: 0.175s !important;

    --button-primary-color: #1976d2 !important;
    --button-primary-color-dark: #004ba0 !important;
    --button-primary-color-light: #ffffff !important;
    --button-primary-color-hover: #156CB8 !important;
    --button-primary-border: none !important;

    --button-secondary-color: #f44336 !important;
    --button-secondary-color-dark: #ba000d !important;
    --button-secondary-color-light: white !important;
    --button-secondary-color-hover: #D63A2F !important;
    --button-secondary-border: 0px solid #ba000d !important;
    --button-secondary-color-active: #D63A2F !important;

    --button-anchor-color: #0e4f88 !important;
    --button-anchor-color-dark: #072743 !important;
    --button-anchor-color-light: #ffffff !important;
    --button-anchor-color-hover: #0d4a7f !important;
    --button-anchor-border: none !important;

    .icon {
      width: 19px;
      top: 2px;
      position: relative;
      height: 100%;
      margin-right: 6px;
    }
  }

  .Disqus {
    max-width: 760px !important;
    min-height: 300px;
    padding-top: 25px;
    #disqus_thread a { // Theme color disqus.
      color: #1976d2;
    }
  }

	textarea{
      resize: vertical;
  }

  #swal2-title {
    font-family: $sans-serif-font;
  }
  #swal2-content {
    font-size: 17px;
  }

  input[type="text"], input[type="email"], textarea {
    border: 2px solid #e3e8eb;
    border-radius: 3px;
    box-shadow: none;
    color: #55595c;
    outline: 0;
    transition: border .3s;
    width: 100%;
    padding: 15px 1.6rem;
    padding-right: 4.7rem;
    font-weight: 400;
    &:focus {
      border-color: #1976d2;
    }
  }

  ${sliderStyles}

  // POST STYLES
  .Post__content {
    a {
      background-image: linear-gradient(#1f79d3, #1f79d3);
      background-repeat: no-repeat;
      background-size: 100% 3px;
      background-position: 0 95%;
      color: inherit;
      &:hover {
        background-image: linear-gradient(#ffa707, #ffa707);
      }
      text-decoration: none;
      &.anchor {
        background: none !important;
        &:hover {
          background: none !important;
        }
      }
    }
  }




  // CODE STYLES
  code {
    -moz-tab-size:    2 !important;
    -o-tab-size:      2 !important;
    tab-size:         2 !important;
    text-shadow: none !important;
    //font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
    &.language-text {
      font-size: .75em;
      top: -1px;
      position: relative;
      padding: 0 6px !important;
      color: inherit !important;
      border: 1px solid #e4d8c8 !important;
      background: #fdfaf6 !important;
    }
  }

  .line-numbers .line-numbers-rows {
    //font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
  }

  .gatsby-highlight-code-line {
    background-color: #f9ecdb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }
  .gatsby-highlight {
    background-color: #fdfaf6;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
  .gatsby-highlight::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .gatsby-highlight::-webkit-scrollbar-thumb {
    background: #f4d1c6;
  }
  .gatsby-highlight::-webkit-scrollbar-track {
    background: #faede5;
  }
`
