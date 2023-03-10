import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


const Worksswiper = () => {
    const swiperinfo = swiperDBlink.portfolio;
      return(
        <Swiper className='workSection' 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
         delay: 4000,
         disableOnInteraction: false,
        }}
        loop = {true} 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >

          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    <SwiperSlide className='pogame'>
                      <img src="/img/one.jpg" className='onejpg img-fluid'></img>
                    </SwiperSlide>
                   )
              }
            )
            
          }
          
        </Swiper>
      )
  }
  
  export default Worksswiper;