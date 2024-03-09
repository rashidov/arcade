import { FC, useRef } from 'react'
import { Swiper, SwiperSlide, SwiperRef, SwiperSlideProps } from 'swiper/react'
import arrowLeft from '../../assets/icons/arrow_left.svg'
import arrowRight from '../../assets/icons/arrow_right.svg'
import 'swiper/scss'
import './style.scss'

interface CarouselProps {
  slides: SwiperSlideProps[]
  slidesPerView?: number
}

export const Carousel: FC<CarouselProps> = ({ slides, slidesPerView = 3 }) => {
  const swiperRef = useRef<SwiperRef>(null)

  const next = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const prev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <div className="carousel">
      <Navigation src={arrowLeft} onClick={next} />
      <Swiper ref={swiperRef} spaceBetween={30} loop={true} slidesPerView={slidesPerView}>
        {slides.map((slide, index) => (
          <SwiperSlide {...slide} />
        ))}
        {/*<SwiperSlide style={{ width: '300px', height: '300px', background: '#FFFFFF' }}>Slide 1</SwiperSlide>*/}
        {/*<SwiperSlide style={{ width: '300px', height: '300px', background: '#FFFFFF' }}>Slide 2</SwiperSlide>*/}
        {/*<SwiperSlide style={{ width: '300px', height: '300px', background: '#FFFFFF' }}>Slide 3</SwiperSlide>*/}
        {/*<SwiperSlide style={{ width: '300px', height: '300px', background: '#FFFFFF' }}>Slide 4</SwiperSlide>*/}
      </Swiper>
      <Navigation src={arrowRight} onClick={prev} />
    </div>
  )
}

interface NavigationProps {
  onClick: () => void
  src: string
}

const Navigation: FC<NavigationProps> = ({ src, onClick }) => {
  return (
    <div className="carousel-arrow" onClick={onClick}>
      <img alt="navigation arrow" src={src} />
    </div>
  )
}
