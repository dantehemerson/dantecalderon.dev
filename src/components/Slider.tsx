import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import InProgress from '../components/Portfolio/InProgress'

const ContainerItem = styled.div``

const TopBar = styled.div`
  height: 30px;
  background: #e9eff3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .TopBarButtons {
    background: #f26e5c;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    position: relative;
    margin-left: 10px;
    &:after {
      content: '';
      background: #47b64b;
      border-radius: 50%;
      position: absolute;
      left: 350%;
      top: 0;
      height: 12px;
      width: 12px;
    }

    &:before {
      content: '';
      background: #fbce75;
      border-radius: 50%;
      height: 12px;
      width: 12px;
      position: absolute;
      left: 175%;
      top: 0;
    }
  }
`
const SliderItem = props => (
  <ContainerItem>
    <TopBar>
      <div className="TopBarButtons" />
    </TopBar>
    <GatsbyImage alt="Slide image" image={props.image} />
  </ContainerItem>
)

const Container = styled.div`
  background: gray;
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.45);
  border-radius: 7px 7px 2px 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`

const InProgressAbsolute = styled.div`
  position: absolute;
  z-index: 2;
  top: 4px;
  right: 4px;
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
}

export default props => (
  <Container>
    {!props.finished && (
      <InProgressAbsolute>
        <InProgress />
      </InProgressAbsolute>
    )}
    <Slider className="PUVIOIs" {...settings}>
      {props.images.map(item => (
        <SliderItem image={item.image.childImageSharp.gatsbyImageData} />
      ))}
    </Slider>
  </Container>
)
