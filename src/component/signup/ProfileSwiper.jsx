import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Box } from '@chakra-ui/react';

import blueberry from '../../assets/blueberry.png';
import cabbage from '../../assets/cabbage.png';
import carrot from '../../assets/carrot.png';
import cucumber from '../../assets/cucumber.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';

import arrowPrev from '../../assets/prev.png';
import arrowNext from '../../assets/next.png';

const images = [tomato, cucumber, carrot, strawberry, blueberry, cabbage];

const ProfileSwiper = () => {
  return (
    <Box w='100%' maxW='360px' pos='relative'>
      <Swiper
        className='swiper'
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={8}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`image-${index}`}
              className='swiper-image'
              style={{ width: '120px', height: 'auto' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={arrowPrev}
        className='swiper-button-prev'
        alt='Previous'
        style={{
          position: 'absolute',
          top: '49px',
          left: '-33px',
          width: '68px',
          height: '68px',
          cursor: 'pointer',
        }}
      />
      <img
        src={arrowNext}
        className='swiper-button-next'
        alt='Next'
        style={{
          position: 'absolute',
          top: '49px',
          right: '-33px',
          width: '68px',
          height: '68px',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};

export default ProfileSwiper;
