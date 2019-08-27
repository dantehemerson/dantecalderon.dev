import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

// All styles for markdown here

const StyledContent = styled.div`
  font-family: 'Gentium Book Basic';
  font-size: 17px;
  line-height: 1.4;

  a {
    color: rgb(74, 144, 226);
    border-bottom: 1px dotted rgb(91, 159, 239);
    text-decoration: none;

    &:hover {
      border-bottom-style: solid;
    }

    // Anchor of title
    &.anchor {
      border-bottom: none;
    }
  }
  // Each item max width
  div.gatsby-highlight,
  ul,
  ol,
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  // only texts
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-left: 10px;
    padding-right: 10px;
  }

  // dots of list
  ul, ol {
    padding-left: 30px;
    padding-right: 12px;
  }

  p {
    padding-left: 12px;
    padding-right: 12px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Open Sans';
  }

  h2 {
    text-align: center;
  }
  h3,
  h2 {
    margin-top: 30px;
    font-size: 25px;
  }
  h4 {
    font-size: 19px;
  }
  h6 {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.53);
    text-align: center;
    font-size: 12px;
    position: relative;
    top: -25px;
    margin-bottom: 0;
  }

  ${media.sm`
    font-size: 20px;
    h3,
    h2 {
      margin-top: 30px;
      font-size: 25px;
    }
    h4 {
      font-size: 19px;
    }
  `}

  ${media.md`
    font-size: 21px;
    h3,
    h2 {
      margin-top: 40px;
      font-size: 29px;
    }
    h4 {
      font-size: 21px;
    }
  `}

  div.gatsby-highlight {
    & + h4,
    & + h3,
    & + h2 {
      margin-top: 30px !important;
    }
  }
  // Aun no se si se usa
  .gatsby-resp-image-wrapper {
    max-width: 1000px !important;
  }

  .gatsby-resp-iframe-wrapper {
    max-width: 100%;
  }

  img.emoji-icon {
    display: inline;
    margin: 0;
    position: relative;
    top: 3px;
    width: 17px;
    ${media.sm`
      width: 19px;
    `}
    ${media.md`
      width: 21px;
    `}
  }
`

export default ({ content }) => (
  <StyledContent id="Markdown">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledContent>
)
