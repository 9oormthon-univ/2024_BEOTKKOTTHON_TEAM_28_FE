import 'swiper/css';
import 'swiper/css/navigation';

import { Box, Image } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PropTypes from 'prop-types';
import arrowNext from '../../assets/next.png';
import arrowPrev from '../../assets/prev.png';
import checkIcon from '../../assets/check.png';
import { returnProfileImg } from '../../lips/returnProfile';
import { useState } from 'react';

const images = ['TOMATO', 'CUCUMBER', 'CARROT', 'STRAWBERRY', 'BLUEBERRY', 'CABBAGE'];

const ProfileImageSelect = ({ handleImage }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleClick = (index) => {
    setSelectedImage(index);
    handleImage(images[index]);
  };

  return (
    <Box w='100%' maxW='800px' pos='relative'>
      <Swiper
        className='swiper'
        slidesPerView={6}
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
            <Box
              pos='relative'
              w='120px'
              h='120px'
              cursor='pointer'
              boxSizing='border-box'
              overflow='hidden'
              border={selectedImage === index ? '3px solid #059669' : '3px solid transparent'}
              borderRadius={selectedImage === index ? '4px' : '0'}
              onClick={() => handleClick(index)}
            >
              <Image
                src={returnProfileImg(image)}
                alt={`image-${index}`}
                w='100%'
                h='100%'
                objectFit='cover'
              />
              {selectedImage === index && (
                <Image
                  src={checkIcon}
                  alt='Selected'
                  pos='absolute'
                  top='14%'
                  left='86%'
                  transform='translate(-50%, -50%)'
                  w='30px'
                  h='30px'
                />
              )}
            </Box>
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

ProfileImageSelect.propTypes = {
  handleImage: PropTypes.func,
};
export default ProfileImageSelect;
