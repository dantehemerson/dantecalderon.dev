import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'

const ContainerItem = styled.div`
`
const SliderItem = props => (
	<ContainerItem>
		<Img sizes={props.image.childImageSharp.sizes } />
	</ContainerItem>	
)


const Container = styled.div`
	background: gray;
	max-width: 960px;
	margin: 0 auto;	
	box-shadow: 0 0 30px rgba(0,0,0,0.45);
	border-radius: 7px 7px 2px 2px;
	overflow: hidden;
	margin-bottom: 20px;
`


const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

export default props => (
  <Container>
    <Slider { ...settings }>	
	    {
	      props.images.map((item, index) => (
	      	<SliderItem image={item.image}/>
	      ))
	    }
    </Slider>
  </Container>
)