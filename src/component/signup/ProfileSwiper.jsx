import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import blueberry from '../../assets/blueberry.png';
import cabbage from '../../assets/cabbage.png';
import carrot from '../../assets/carrot.png';
import cucumber from '../../assets/cucumber.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';

const images = [tomato, cucumber, carrot, strawberry, blueberry, cabbage];

const ProfileSwiper = () => {
  return (
    <div style={{ width: '100%', maxWidth: '360px' }}>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`image-${index}`} style={{ width: '120px' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileSwiper;
