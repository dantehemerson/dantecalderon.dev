import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

const ContactSocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled(AwesomeButton)`
  margin: 14px 3px !important;
  border: 0 !important;
  .aws-btn__content {
    padding: 0 14px !important;
    & > span {
      height: 100%;
    }
  }
  img {
    width: 24px;
    height: 88%;
    margin: 0;
    border: 0px solid !important;
    position: relative;
    top: 2px;
  }
`

const ContactSocial = () => {
  const { title, socials } = _.get(
    useStaticQuery(graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            socials {
              github
              twitter
              linkedin
              instagram
            }
          }
        }
      }
    `),
    'site.siteMetadata'
  )

  return (
    <ContactSocialWrapper>
      <Button
        type="github"
        size="small"
        href={socials.github}
        title={`Github - ${title}`}
        target="_blank"
      >
        <img
          src="https://icongr.am/fontawesome/github.svg?color=ffffff"
          title={`Github - ${title}`}
          alt="img"
        />
      </Button>
      <Button
        type="twitter"
        size="small"
        href={socials.twitter}
        title={`Twitter - ${title}`}
        target="_blank"
      >
        <img
          src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
          title={`Twitter - ${title}`}
          alt="img"
        />
      </Button>
      <Button
        type="linkedin"
        size="small"
        href={socials.linkedin}
        title={`Linkedin - ${title}`}
        target="_blank"
      >
        <img
          src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
          title={`Linkedin - ${title}`}
          alt="img"
        />
      </Button>
      <Button
        type="instagram"
        size="small"
        href={socials.instagram}
        title={`Instagram - ${title}`}
        target="_blank"
      >
        <img
          src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
          title={`Instagram - ${title}`}
          alt="img"
        />
      </Button>
    </ContactSocialWrapper>
  )
}

export default ContactSocial
