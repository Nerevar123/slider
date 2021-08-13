import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

import a from "../images/a.png";
import b from "../images/b.png";
import c from "../images/c.png";
import d from "../images/d.png";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Slider1() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={a} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
