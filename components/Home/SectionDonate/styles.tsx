import styled from 'styled-components'

import { ImageCircleProps } from './types'

export const Container = styled.div`
  background-color: #EDEDED;
  padding-bottom: 110px;
  overflow: hidden;
`

export const SectionTitle = styled.div`
  max-width: 700px;
  margin: 60px auto 40px;
  text-align: center;
  
  @media (max-width: 780px) {
    max-width: none;
    width: 100%;
  }

  & h2 {
    color: #EF7D00;
    font-size: 27px;
    font-weight: 700;
  
    @media (max-width: 780px) {
      font-size: 18px;
      padding: 0 15px;
    }

    & span {
      color: #616161;
      font-weight: 500;
    }
  }
`

export const CounterCard = styled.div`
  box-shadow: 7px 7px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 50px 35px 40px;
  background-color: #fff;
  border-top-left-radius: 41px;
  border-bottom-right-radius: 41px;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-right: 120px;
  text-align: center;

  @media (max-width: 780px) {
    margin-right: 0;
    margin-left: 20px;
    padding: 25px;
    background-color: #fff;
    border-top-left-radius: 11px;
    border-bottom-right-radius: 11px;
  }

  & > h3 {
    color: #EF7D00;
    font-size: 100px;
    font-weight: 700;
    margin: 0px;
  
    @media (max-width: 780px) {
      font-size: 27px;
    }
  }

  & > p {
    color: #0099A8;
    font-size: 35px;
    font-weight: 600;
    margin: 0px 0px 50px;
  
    @media (max-width: 780px) {
      font-size: 11px;
      margin: 0px 0px 10px;
    }
  }

  & > span {
    color: #959595;
    font-size: 35px;
    font-weight: 500;
    margin: 0px;
  
    @media (max-width: 780px) {
      font-size: 11px;
    }
  }

  & > h4 {
    color: #EF7D00;
    font-size: 77px;
    font-weight: 700;
    margin: 0px;
  
    @media (max-width: 780px) {
      font-size: 20px;
    }
  }
`

export const AboutCard = styled.div`
  box-shadow: 7px 7px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 50px 16px 20px;
  background-color: #fff;
  border-top-right-radius: 41px;
  border-bottom-left-radius: 41px;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-left: 170px;
  
  @media (max-width: 780px) {
    margin-left: 20px;
    border-top-right-radius: 21px;
    border-bottom-left-radius: 21px;
    padding: 20px 16px;
  }

  & > p {
    text-align: center;
    color: #959595;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    @media (max-width: 780px) {
      font-size: 12px;
      line-height: 16px;
    }

    & > span {
      color: #0099A8;
      font-weight: 700;
    }
  }
`

export const AboutCardHeader = styled.div`
  background-color: #0099A8;
  position: absolute;
  top: -30px;
  left: 95px;
  width: 369px;
  height: 60px;
  display: block;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: 780px) {
    top: -20px;
    left: 18px;
    width: 140px;
    height: 35px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  & > h4 {
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin: 11px 0;

    @media (max-width: 780px) {
      font-size: 11px;
      margin: 11px 0;
    }
  }

  & > img {
    position: absolute;
    top: -11px;
    right: -8px;

    @media (max-width: 780px) {
      width: 37px;
    }
  }
`

export const SubSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 70px;

  @media (max-width: 780px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const SubSectionColumn = styled.div`
  flex: 1;
  
  @media (max-width: 780px) {
    flex: 0;
  }

  & > h4 {
    font-weight: 700;
    font-size: 44px;
    color: #0099A8;
    margin: 0px 0px 30px 58px;
  
    @media (max-width: 780px) {
      font-size: 13px;
      margin: 0px 0px 10px 32px;
    }
  }
`

export const ImageCircle = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  
  @media (max-width: 780px) {
    width: 140px;
    height: 140px;
    margin-left: 20px;
  }
  
  & > img {
    position: absolute;
    top: -20px;
    right: 12px;
    z-index: 1;

    @media (max-width: 780px) {
      zoom: 0.2;
    }
  }

  & > span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 341px;
    border: solid 8px #fff;
    position: absolute;
    bottom: -10px;
    left: -20px;
    z-index: 1;
  
    @media (max-width: 780px) {
      left: -10px;
    }
  }

  & > div {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 341px;
    background-color: #fff;
    background-image: url(${({ src }: ImageCircleProps) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: 2;
  }
  
  & > img.right {
    left: 12px;
  }

  & > span.right {
    right: -20px;
    left: auto;
  
    @media (max-width: 780px) {
      right: -10px;
    }
  }
`

export const SelectOngsContainer = styled.div`
  text-align: center;

  & > p {
    display: none;
  
    @media (max-width: 780px) {
      font-weight: 500;
      color: #959595;
      font-size: 15px;
      text-align: center;
      display: block;
      width: 360px;
      margin: 0 auto;
    }
  }

  & > p > span {
    font-weight: 700;
    color: #0099A8;
  }

  & > h4 {
    color: #0099A8;
    font-size: 33px;
    font-weight: 700;

    @media (max-width: 780px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  & > div {
    width: 350px;
    margin: 0 auto;
  }
  & > div > label {
    color: #959595;
    font-size: 23px;
    font-weight: 500;
    display: block;
    text-align: left;
    margin: 0 0 10px 30px;

    @media (max-width: 780px) {
      font-size: 20px;
    }
  }
  & > div > select {
    width: 100%;
    height: 80px;
    border: none;
    border-radius: 40px;
    padding: 0 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    font-size: 20px;
    color: #5A5A5A;
    font-weight: 600;
    background-image: url('/img/icon-select-arrow.svg');
    background-repeat: no-repeat;
    background-position: 295px 17px;

    @media (max-width: 780px) {
      height: 50px;
      background-color: white;
    }
  }
  & > select > option {
    
  }
`

export const FeaturedQuantity = styled.div`
  display: block;
  margin-left: 210px;
  
  @media (max-width: 780px) {
    margin-left: 0px;
  }

  & > img {
    width: 515px;
    height: auto;
  
    @media (max-width: 780px) {
      width: 195px;
    }
  }

  & > p {
    font-weight: 500;
    color: #959595;
    font-size: 24px;
    text-align: center;
  
    @media (max-width: 780px) {
      display: none;
    }
  }

  & > p > span {
    font-weight: 700;
    color: #0099A8;
  }
`