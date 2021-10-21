import { Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import Wrapper from '../../../containers/Wrapper'
import AnimatedComponents from '../../../containers/AnimatedComponents'
import { components, classes } from './animation'
import brands from './brands'
import {
  Container,
  BrandCard,
  SwiperContainer,
  SectionTitle,
  AboutTipTitle,
  ImageGroup,
  DesktopView,
  MobileView
} from './styles'

const swiperSlideStyle = {
  width: '204px !important'
}

const swipeBreakpoints = {
  780: {
    slidesPerView: 6,
    spaceBetween: 14
  }
}

const SwiperCarousel = () => {
  return (
    <SwiperContainer>
      <SectionTitle className={classes[0]}>
        Marcas participantes:
      </SectionTitle>
      <Swiper
        modules={[ Scrollbar, Autoplay ]}
        scrollbar={{ draggable: true }}
        slidesPerView={3}
        spaceBetween={6}
        breakpoints={swipeBreakpoints}
        autoplay
        className="mySwiper"
      >
        {brands.map(({ imgPath }, i) => (
          <SwiperSlide key={imgPath} style={swiperSlideStyle}>
            <BrandCard imgPath={imgPath} className="cardbrand" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  )
}

const ExtraComponent = () => (
  <AboutTipTitle className={classes[2]}>
    Veja como funciona:
  </AboutTipTitle>
)

const SectionFeatured = () => {
  const renderDesktopComponents = () => (
    <DesktopView>
      <AnimatedComponents components={components} extra={<ExtraComponent />}/>
    </DesktopView>
  )

  const renderMobileComponents = () => (
    <MobileView>
      <ImageGroup
        src="/img/section-one/responsive-group.png"
        alt="responsive-group"
      />
      <SectionTitle>
        Veja como funciona:
      </SectionTitle>
      <ImageGroup
        src="/img/section-one/responsive-info.png"
        alt="responsive-info"
        className="mobile-info"
      />
    </MobileView>
  )

  const renderCarousel = () => <SwiperCarousel />

  return (
    <Container>
      <Wrapper size="lg">
        {renderDesktopComponents()}
        {renderMobileComponents()}
        {renderCarousel()}
      </Wrapper>
    </Container>
  )
}

export default SectionFeatured