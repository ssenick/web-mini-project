import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { memo } from 'react';
import { Autoplay, EffectCreative, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SliderSwiper.module.scss';

interface SliderProps {
   className?: string;
}

export const SliderSwiper = memo(({ className }: SliderProps) => {
   return (
      <div>
         <Swiper
            speed={1000}
            effect={'creative'}
            loop={true}
            parallax={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: true,
            }}
            creativeEffect={{
               prev: {
                  shadow: false,
                  translate: [0, 0, -400],
               },
               next: {
                  translate: ['100%', 0, 0],
               },
            }}
            modules={[EffectCreative, Autoplay, Parallax]}
            className={classNames(cls.Slider, {}, [className])}
         >
            <SwiperSlide className={cls.slide}>
               <img
                  data-swiper-parallax-scale={1.5}
                  src="https://www.cdc.gov/coronavirus/2019-ncov/images/COVID-19-SM-1200px.jpg"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
               <img
                  data-swiper-parallax-scale={1.5}
                  src="https://www.cdc.gov/coronavirus/2019-ncov/images/COVID-19-SM-1200px.jpg"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
               <img
                  data-swiper-parallax-scale={1.5}
                  src="https://www.cdc.gov/coronavirus/2019-ncov/images/COVID-19-SM-1200px.jpg"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide className={cls.slide}>
               <img
                  data-swiper-parallax-scale={1.5}
                  src="https://www.cdc.gov/coronavirus/2019-ncov/images/COVID-19-SM-1200px.jpg"
                  alt=""
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
});
