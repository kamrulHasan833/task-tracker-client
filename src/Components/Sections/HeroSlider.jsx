import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import HeroSlide from "../Shared/HeroSlide";
import SectionWrapperLarge from "../Shared/SectionWrapperLarge";

const slides = [
  {
    id: 1,
    image: "https://unity-mates-server.vercel.app/images/slider-1.jpg",
    title: `Welcome To Task Tracker`,
    moto: "Manage your work efficiently",
    btn_text: "Let's Explore",
    path: "/dashboard",
  },
  {
    id: 2,
    image: "https://unity-mates-server.vercel.app/images/slider-2.jpg",
    title: "Track Your Task",
    moto: "Best task management app",
    btn_text: "Let's Explore",
    path: "/dashboard",
  },
];
const HeroSlider = () => {
  return (
    <>
      <SectionWrapperLarge>
        <Swiper
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          modules={[Navigation, Autoplay, Pagination, EffectFade]}
          pagination={{ clickable: true }}
          className="mySwiper hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => isActive && <HeroSlide slide={slide} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionWrapperLarge>
    </>
  );
};

export default HeroSlider;
