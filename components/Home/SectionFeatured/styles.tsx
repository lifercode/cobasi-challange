import styled from 'styled-components'

import Image from '../../../containers/Image'
import { BrandCardProps } from './types'

export const Container = styled.div`
  height: 1276px;
  background-color: #0099A8;
  overflow: hidden;

  @media (max-width: 780px) {
    height: auto;
  }
`

export const BrandCard = styled.div`
  display: flex;
  width: 203px;
  height: 145px;
  background-color: #FFF;
  margin: 0 7px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-image: url(${({ imgPath }: BrandCardProps) => imgPath});
  background-repeat: no-repeat;
  background-size: 58% auto;
  background-position: center;

  @media (max-width: 780px) {
    margin: 0;
    width: auto;
    height: 100px;
  }
`

export const SwiperContainer = styled.div`
  max-width: 1330px;
  margin: 824px auto 0px;

  @media (max-width: 780px) {
    margin: 5px 20px 50px;
    display: inherit;
  }

  & > div {
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`

export const SectionTitle = styled.h3`
  color: #FFF;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  
  @media (max-width: 780px) {
    font-weight: 400;
    font-size: 18px;
  }
`

export const AboutTipTitle = styled.h3`
  position: absolute;
  top: 416px;
  left: 1111px;
  color: #FFF;
  font-weight: 600;
  font-size: 27px;
`

export const ImageGroup = styled(Image)`
  max-width: 100%;
  margin: 0 auto;
  display: none;
  
  @media (max-width: 780px) {
    display: block;
  }
`

export const DesktopView = styled.div`
  display: inherit;
  
  @media (max-width: 780px) {
    display: none;
  }
`

export const MobileView = styled.div`
  display: none;
  
  @media (max-width: 780px) {
    display: block;
    width: fit-content;
  }

  & > img.mobile-info {
    width: 80%;
  }
`