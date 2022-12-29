import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


const Worksswiper = () => {
    const swiperinfo = swiperDBlink.portfolio;
      return(
        <Swiper className='workSection border'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        //autoplay={{
        //  delay: 4000,
        //  disableOnInteraction: false,
        //}}
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
                    <div className='overflow-hidden'>
                    <SwiperSlide className='pogame'>
                      <div className='blickwindow'></div>
                    </SwiperSlide>
                    </div>
                   )
              }
            )
            
          }
             
        </Swiper>
      )
  }
  
  export default Worksswiper;