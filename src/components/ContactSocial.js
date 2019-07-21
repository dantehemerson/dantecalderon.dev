import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

const ContactSocialWrapper = styled.div`
  text-align: center;
`

const Button = styled(AwesomeButton)`
  margin: 0 3px !important;
  .aws-btn__content {
    padding: 0 15px !important;
  }
  img {
    width: 25px;
    height: 25px;
    margin: 0;
    position: relative;
    top: 2px;
  }
`

export default props => (
  <ContactSocialWrapper>
    <Button
      type="github"
      size="small"
      href="https://www.github.com/dantehemerson"
      title="Github - Dante Calderón"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/github.svg?color=ffffff" title="Github - Dante Calderón" alt="img" />
    </Button>
    <Button
      type="twitter"
      size="small"
      href="https://twitter.com/dantehemerson"
      title="Twitter - Dante Calderón"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/twitter.svg?color=ffffff" title="Twitter - Dante Calderón" alt="img" />
    </Button>
    <Button
      type="linkedin"
      size="small"
      href="https://www.linkedin.com/in/dantehemerson/"
      title="Linkedin - Dante Calderón"
      target="_blank"
    >
      <img src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff" title="Linkedin - Dante Calderón" alt="img" />
    </Button>
    <Button
      type="instagram"
      size="small"
      href="https://www.instagram.com/dantehemerson/"
      title="Instagram - Dante Calderón"
      target="_blank"
    >
      <img
        src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
        title="Instagram - Dante Calderón"
        alt="img"
      />
    </Button>
  </ContactSocialWrapper>
)
