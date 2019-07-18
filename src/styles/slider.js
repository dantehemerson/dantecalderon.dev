export default `
  .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
      position: relative;
      overflow: hidden;
      display: block;
      margin: 0;
      padding: 0;

      &:focus {
          outline: none;
      }

      &.dragging {
          cursor: pointer;
          cursor: hand;
      }
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }

  .slick-track {
      position: relative;
      left: 0;
      top: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;

      &:before,
      &:after {
          content: "";
          display: table;
      }

      &:after {
          clear: both;
      }

      .slick-loading & {
          visibility: hidden;
      }
  }
  .slick-slide {
      float: left;
      height: 100%;
      min-height: 1px;
      [dir="rtl"] & {
          float: right;
      }
      img {
          display: block;
      }
      &.slick-loading img {
          display: none;
      }

      display: none;

      &.dragging img {
          pointer-events: none;
      }

      .slick-initialized & {
          display: block;
      }

      .slick-loading & {
          visibility: hidden;
      }

      .slick-vertical & {
          display: block;
          height: auto;
          border: 1px solid transparent;
      }
  }
  .slick-arrow.slick-hidden {
      display: none;
  }

  // ////////// THEME
  $slick-arrow-color: white !default;
  $slick-dot-color: black !default;
  $slick-dot-color-active: $slick-dot-color !default;
  $slick-dot-size: 6px !default;
  $slick-opacity-default: 0.75 !default;
  $slick-opacity-on-hover: 1 !default;
  $slick-opacity-not-active: 0.55 !default;

  .slick-prev,
  .slick-next {
      position: absolute;
      display: block;
      height: 28px;
      width: 28px;
      @media (min-width: 576px) {
        height: 36px;
        width: 36px;
      }
      @media (min-width: 768px) {
        height: 40px;
        width: 40px;
      }
      border-radius: 23px;
      line-height: 0px;
      font-size: 0px;
      cursor: pointer;
      background: rgba(231, 236, 239, 0.46);
      box-shadow: 0 0px 6px rgba(0,0,0,0.5);
      text-shadow: 0 0 4px rgba(0,0,0,0.5);
      top: 50%;
      overflow: hidden;
      transform: translate(0, -50%);
      border: none;
      outline: none;
      z-index: 9;
      opacity: .3;
      transition: opacity .3s;
      &:hover {
        opacity: 1;
      }
      &:before {
        font-size: 40px;
        font-family: 'Open Sans';
        line-height: 14px !important;
        color: white;
        @media (min-width: 576px) {
          font-size: 46px;
          line-height: 16px !important;
        }
        @media (min-width: 768px) {
          font-size: 50px;
          line-height: 19px !important;
        }
      }
  }

  .slick-prev {
      left: 14px;
      &:before {
        content: '\\2039';
        letter-spacing: 2px;
      }
  }

  .slick-next {
      right: 14px;
      &:before {
        letter-spacing: -4px;
        content: '\\203A';
      }
  }

  /* Dots */

  .slick-dotted.slick-slider {
      margin-bottom: 30px;
  }

  .slick-dots {
      position: absolute;
      bottom: 0;
      list-style: none;
      display: block;
      text-align: center;
      padding: 0;
      margin: 0;
      width: 100%;
      li {
          position: relative;
          display: inline-block;
          height: 20px;
          width: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
          button {
              border: 0;
              background: transparent;
              display: block;
              height: 20px;
              width: 20px;
              outline: none;
              line-height: 0px;
              font-size: 0px;
              color: transparent;
              padding: 5px;
              cursor: pointer;
              &:hover, &:focus {
                  outline: none;
                  &:before {
                    //opacity: $slick-opacity-on-hover;
                  }
              }
              &:before {
                  position: absolute;
                  top: 0;
                  left: 0;
                  background: blue;
                  content: 'DOT';
                  width: 20px;
                  height: 20px;
                  line-height: 20px;
                  text-align: center;
                  color: $slick-dot-color;
                  opacity: $slick-opacity-not-active;
              }
          }
          &.slick-active button:before {
              color: $slick-dot-color-active;
              opacity: $slick-opacity-default;
          }
      }
  }
`
