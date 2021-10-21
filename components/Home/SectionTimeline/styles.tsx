import styled from 'styled-components'

import { TimelineItemProps } from './types'

export const Container = styled.div`
  padding-bottom: 73px;
  background-color: #FFF;
  overflow: hidden;
`

export const ImageTitle = styled.div`
  margin: 50px auto;
  
  @media (max-width: 780px) {
    margin: 30px auto -30px;
  }

  & > img {
    zoom: 0.8;

    @media (max-width: 780px) {
      width: 320px;
    }
  }
`

export const TimelineContainer = styled.div`
  margin-bottom: 100px;

  @media (max-width: 780px) {
    padding: 30px;
  }
`

export const Timeline = styled.div`
  display: flex;
  flex-direction: row;
  padding: 150px 0;

  @media (max-width: 780px) {
    padding: 130px 0;
  }
`

export const TimelineItem = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  padding: 6px 0;
  flex: 1;
  background-color: ${({ active }: TimelineItemProps) => active ? '#0099A8' : '#EF7D00' };
  margin-left: ${({ noMarginLeft }: TimelineItemProps) => noMarginLeft ? '0px' : '-35px' };
  height: 50px;
  border-top-left-radius: ${({ noBorderLeftRadius }: TimelineItemProps) => noBorderLeftRadius ? 0 : '25px' };
  border-top-right-radius: ${({ noBorderRightRadius }: TimelineItemProps) => noBorderRightRadius ? 0 : '25px' };
  border-bottom-left-radius: ${({ noBorderLeftRadius }: TimelineItemProps) => noBorderLeftRadius ? 0 : '25px' };
  border-bottom-right-radius: ${({ noBorderRightRadius }: TimelineItemProps) => noBorderRightRadius ? 0 : '25px' };
  position: relative;

  @media (max-width: 780px) {
    font-size: 20px;
    padding: 8px 0;
    height: 40px;
  }

  & > span {
    display: block;
    width: 0;
    height: 45px;
    border: solid 5px ${({ active }: TimelineItemProps) => active ? '#0099A8' : '#EF7D00' };
    background-color: ${({ active }: TimelineItemProps) => active ? '#0099A8' : '#EF7D00' };
    border-radius: 10px;
    position: absolute;
    top: ${({ active }: TimelineItemProps) => active ? '-20px' : '18px' };
    left: 50%;
    margin-left: -5px;
    z-index: -1
  }

  & > div {
    padding: 0 20px;
    width: 100%;
    position: absolute;
    top: ${({ active }: TimelineItemProps) => active ? 'unset' : '80px' };
    bottom: ${({ active }: TimelineItemProps) => active ? '80px' : 'unset' };
    left: 50%;
    margin-left: -50%;
  }

  & > div > p {
    font-size: 14px;
    color: #000;
    font-weight: 400;

    @media (max-width: 780px) {
      margin: 0 -40px;
    }
  }
`

export const FormContainer = styled.div`
  max-width: 750px;
  margin: 0 auto;
  
  @media (max-width: 780px) {
    max-width: 340px;
  }

  & > img {
    margin-left: 50px;
    margin-bottom: -4.5px;
    
    @media (max-width: 780px) {
      width: 60px;
    }
  }

  & > div {
    background-color: #EF7D00;
    border-radius: 35px;
    padding: 45px 50px;
  
    @media (max-width: 780px) {
      border-radius: 25px;
      padding: 25px 30px;
    }
  }

  & > div > p {
    font-size: 25px;
    color: #fff;
    text-align: center;
    padding: 0px 70px;
    margin: 0 0 30px 0;

    @media (max-width: 780px) {
      font-size: 15px;
      padding: 0px 30px;
      margin: 0 0 20px 0;
    }
  }

  & > div > fieldset {
    border: none;
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  & > div > fieldset > input {
    display: flex;
    flex: 1;
    border-radius: 13px;
    border: none;
    height: 50px;
    outline: none;
    padding: 0 50px 0 20px;
    font-size: 18px;
  
    @media (max-width: 780px) {
      border-radius: 23px;
      height: 40px;
      flex: 0;
    }
  }

  & > div > fieldset > button {
    cursor: pointer;
    margin-left: -30px;
    border: none;
    border-radius: 13px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 20px;
    background-color: #0099A8;
    color: #fff;
  
    @media (max-width: 780px) {
      margin-left: -100px;
      border-radius: 23px;
      font-size: 14px;
    }
  }
`