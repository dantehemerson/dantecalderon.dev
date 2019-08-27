import { createGlobalStyle, css } from 'styled-components'
import sliderStyles from './slider'
import constants from './constants'
import prismStyles from './prism'
import { withPrefix } from 'gatsby'

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 576
}

const sizesMax = {
  xl: 1169,
  lg: 991,
  md: 767,
  sm: 575
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const mediaMax = Object.keys(sizesMax).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
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
  ${prismStyles}
  body {
    margin: 0 !important;
    padding: 0 !important;
    text-rendering: geometricPrecision;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  .container {
  padding-left: ${constants.containerPaddingLg};
  padding-right: ${constants.containerPaddingLg};
  max-width: 1130px;
  margin-left: auto;
  margin-right: auto;

  &--full {
    @extend .container;
    max-width: 1280px;
  }
  &--blog {
    @extend .container;
    max-width: 1340px;
  }
}
  a.default {
    color: #4a90e2;
    border-bottom: 1px dotted #5b9fef;
    text-decoration: none !important;
    &:hover {
     border-bottom-style: solid;
    }
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
    background: white;
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
			color: #4a90e2;
			border-bottom: 1px dotted #5b9fef;
      &:hover {
		    border-bottom-style: solid;
      }
      text-decoration: none;
      &.anchor {
        border-bottom: none;
      }
    }
    img {
      margin: 0 auto;
      display: block;
    }
  }




  // CODE STYLES
  code {
    -moz-tab-size:    2 !important;
    -o-tab-size:      2 !important;
    tab-size:         2 !important;
    text-shadow: none !important;

    &.language-text.language-text {
      font-size: .8rem;
      top: -1px;
      position: relative;
      padding: 0 6px !important;
      color: inherit !important;
      border: 1px solid #dbe3e7 !important;
      background: #ecf4fc !important;
    }
  }

  .line-numbers .line-numbers-rows {

  }

  .line-numbers-rows {
    border-right: 1px solid #dbe3e7 !important;
    & > span:before {
      color: #a9b9c0 !important;
      text-shadow: none !important;
    }
  }

  .gatsby-highlight-code-line {
    background-color: #474747;
    display: block;
    z-index: 4;
    position: relative;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #b2c4ce;
  }

  .gatsby-highlight pre[class*="language-"] {
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }
  code[class*="language-"], pre[class*="language-"] {
    font-size: 12px;
  }
  .gatsby-highlight {
    background: #2e2e2e;
    border-radius: 5px;
    padding: 0.6em 0.7em;
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
    background: #f08c49;
  }
  .gatsby-highlight::-webkit-scrollbar-track {
    background: #717171;
  }



  .twitter--hover:hover {
    background: #00aced !important;
  }

  .github--hover:hover {
    background: #333 !important;
  }

  .instagram--hover:hover {
    background: #966842 !important;
  }

  .linkedin--hover:hover {
    background: #0077b5 !important;
  }

  .medium--hover:hover {
    background: #0bdc6d !important;
  }

  .dev--hover:hover {
    background: white !important;
  }
  .icon_svg {
  width: 21px;
  height: 21px;
}

.ToolbarButton {
  text-decoration: none !important;
  &:first-child {
    margin-right: 6px;
  }
  font-size: 13px;

  .icon {
    width: 17px;
    top: 3px;
    position: relative;
    height: 100%;
    margin-right: 6px;
  }
}

.About {
  font-size: 15px;
  &__interests {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: left;

    &__list {
      list-style: none;
    }
    &__item {
      margin-bottom: calc(1.3rem / 2);
      i {
        width: 27px;
        height: 27px;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        top: 6px;
        background-size: cover;
      }
      i.ai {
        background-image: url("${withPrefix('icons/ai.svg')}");
      }
      i.ml {
        background-image: url("${withPrefix('icons/machine-learning.svg')}");
      }
      i.ds {
        background-image: url("${withPrefix('icons/data.svg')}");
      }
      i.js {
        background-image: url("${withPrefix('icons/javascript.svg')}");
      }
      i.cp {
        background-image: url("${withPrefix('icons/algorithm.svg')}");
      }
      i.back {
        background-image: url("${withPrefix('icons/server.svg')}");
      }
      i.more {
        background-image: url("${withPrefix('icons/web-development.svg')}");
      }
      i.game {
        background-image: url("${withPrefix('icons/pacman.svg')}");
      }
    }
  }

  &__interests__title {
    font-family: 'Open Sans';
    text-transform: uppercase;
    background: #3384a0;
    color: white;
    font-size: 16px;
    padding: 10px 85px;
    display: inline-block;
  }
}

`
