import styled from 'styled-components'

export const Container = styled.div`
  padding: 155px 0 140px;
  background-color: #0099A8;
  overflow: hidden;

  @media (max-width: 780px) {
    padding: 30px 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: 780px) {
    zoom: 0.28;
    margin: 0 60px;
  }

  & > img {
    zoom: 0.8;
  }
`

export const AboutContainer = styled.div`
  & > div {
    margin-top: 66px;
    margin-bottom: 70px;
    background-color: #EDEDED;
    padding: 50px 80px;
    border-bottom-left-radius: 70px;
  }
  & > div > p {
    font-size: 27px;
    color: #747474;
    margin: 0;

    & > span {
      font-weight: 700;
      color:#EF7D00;
    }
  }
  & > div > h4 {
    font-size: 38px;
    color: #EF7D00;
    margin: 0;
  }

  & > img {
    margin: 0 auto;
    display: block;
    max-width: 300px;
  }
`