import Img from 'gatsby-image'
import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { media } from '../styles'
import hacker from '../assets/images/icons/linux-original.svg'
import protection from '../assets/images/icons/algorithm.svg'
import server from '../assets/images/icons/spotify.svg'
import www from '../assets/images/icons/coffee.svg'
import browser from '../assets/images/icons/idea.svg'
import computer from '../assets/images/icons//laptop-2.png'
import laptop from '../assets/images/icons/books.svg'
import headphones from '../assets/images/icons/machine-learning.svg'

const rotationalItem = (classname, deg, img, duration = '.3s') => css`
  .${classname} {
    transform: rotate(${deg});
    animation: orb-${classname} ${duration} linear infinite;


    @keyframes orb-${classname} {
      from {
        transform: rotate(${deg});
      }
      to {
        transform: rotate(${deg} - 360deg);
      }
    }

    &:before {
      transform: rotate(-${deg});
      background-image: url(${img});
      animation: orbef-${classname} ${duration} linear infinite;
      @keyframes orbef-${classname} {
        from {
          transform: rotate(-${deg});
        }
        to {
          transform: rotate(-${deg} + 360deg);
        }
      }
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .Rotational__orbit {
    width: 100%;
    position: relative;
    display: flex;
    max-width: 255px;
    max-height: 255px;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
    margin-bottom: 100px;
        
    ${media.sm`
      max-width: 350px;
      max-height: 350px;
      margin-top: 120px;
      margin-bottom: 130px;
    `}

    ${media.sm`
      max-width: 350px;
      max-height: 350px;
      margin-top: 120px;
      margin-bottom: 130px;
    `}
    
    ${media.lg`
      max-width: 400px;
      max-height: 400px;
      margin-top: 0px;
      margin-bottom: 0px;
    `}
  }

  .Rotational__item {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;

    &:before {
      content: '';
      position: absolute;
      background-size: cover;
      width: 38px;
      height: 38px;

      @include breakpoint(sm) {
        width: 55px;
        height: 55px;
      }
    }

    &.computer {
      &:before {
        height: 55px;
        width: 45px;
        @include breakpoint(sm) {
          height: 65px;
          width: 55px;
        }
      }
    }
    &.hacker {
      &:before {
        width: 48px;
        height: 48px;
        @include breakpoint(sm) {
          width: 65px;
          height: 65px;
        }
      }
    }
  }

  ${rotationalItem('hacker', '45deg', hacker)}  
  ${rotationalItem('protection', '90deg', protection)}  
  ${rotationalItem('server', '135deg', server)}  
  ${rotationalItem('www', '180deg', www)}  
  ${rotationalItem('browser', '225deg', browser)}  
  ${rotationalItem('computer', '270deg', computer)}  
  ${rotationalItem('laptop', '315deg', laptop)}  
  ${rotationalItem('headphones', '360deg', headphones)}  
`
console.log(rotationalItem('headphones', '360deg', headphones))
const AvatarContainer = styled.div`
  width: 115px;
  border-radius: 50%;
  overflow: hidden;
  animation: float 3s ease-in-out infinite;
  ${media.sm`
    width: 175px;
  `}
  ${media.lg`
    width: 200px;
  `}
`

export default props => (
  <Container>
    <div className="Rotational__orbit">
      <div className="Rotational__item computer" />
      <div className="Rotational__item hacker" />
      <div className="Rotational__item server" />
      <div className="Rotational__item www" />
      <div className="Rotational__item browser" />
      <div className="Rotational__item protection" />
      <div className="Rotational__item laptop" />
      <div className="Rotational__item headphones" />
      <AvatarContainer>
        <Img sizes={props.avatar.sizes} />
      </AvatarContainer>
    </div>
  </Container>
)

/**


  &__item {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;

    &:before {
      content: '';
      position: absolute;
      background-size: cover;
      width: 38px;
      height: 38px;
      
      ${media.sm`
        width: 55px;
        height: 55px;
      `}
    }

    &.computer {
      &:before {
        height: 55px;
        width: 45px;
        ${media.sm`
          height: 65px;
          width: 55px;
        `}
      }
    }
    &.hacker {
      &:before {
        width: 48px;
        height: 48px;
        ${media.sm`
          width: 65px;
          height: 65px;
        `}
      }
    }
     @include rotationalItem(hacker, 45deg, 'icons/linux-original.svg');
    @include rotationalItem(protection, 90deg, 'icons/algorithm.svg');
    @include rotationalItem(server, 135deg, 'icons/spotify.svg');
    @include rotationalItem(www, 180deg, 'icons/coffee.svg');
    @include rotationalItem(browser, 225deg, 'icons/idea.svg');
    @include rotationalItem(computer, 270deg, 'icons/laptop-2.png');
    @include rotationalItem(laptop, 315deg, 'icons/books.svg');
    @include rotationalItem(headphones, 360deg, 'icons/machine-learning.svg'); 
  }
 */
