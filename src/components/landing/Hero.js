import React from 'react'
import slide1 from "./sildes/slide-1.png";
import slide2 from "./sildes/slide-2.png";
import slide3 from "./sildes/slide-3.png";
import slide4 from "./sildes/slide-4.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './landing.css'
const Hero = () => {
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
        width: "70%",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="item">
          <div className="text">
            <h4>50% off For Your First Shopping</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et,Auctor libero id et,
            </p>
            <button>Visit Collection</button>
          </div>
          <img style={{ width: "26%" }} src={slide1} alt="laptop" />
        </div>

        <div className="item">
          <div className="text">
            <h4>50% off For Your First Shopping</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et,Auctor libero id et,
            </p>
            <button>Visit Collection</button>
          </div>
          <img style={{ width: "26%" }} src={slide2} alt="laptop" />
        </div>

        <div className="item">
          <div className="text">
            <h4>50% off For Your First Shopping</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et,Auctor libero id et,
            </p>
            <button>Visit Collection</button>
          </div>
          <img style={{ width: "26%" }} src={slide3} alt="laptop" />
        </div>

        <div className="item">
          <div className="text">
            <h4>50% off For Your First Shopping</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et,Auctor libero id et,
            </p>
            <button>Visit Collection</button>
          </div>
          <img style={{ width: "26%" }} src={slide4} alt="laptop" />
        </div>
      </Carousel>
    </div>
  );
}

export default Hero


