import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

// All styles for markdown here

const StyledContent = styled.div`
  font-family: 'Gentium Book Basic';
  font-size: 17px;
  line-height: 1.4;

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
    max-width: 100% !important;
  }
`

export default ({ content }) => (
  <StyledContent id="Markdown">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledContent>
)
