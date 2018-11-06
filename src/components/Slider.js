import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Img from 'gatsby-image'

const ContainerItem = styled.div`
`

const TopBar = styled.div`
	height: 30px;
	background: #e9eff3;
	width: 100%;
	display: flex;
	align-items: center;
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
			<div className="TopBarButtons"></div>
		</TopBar>
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