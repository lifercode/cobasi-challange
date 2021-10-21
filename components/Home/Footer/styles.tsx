import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 0;
  background-color: #00255F;
  color: #dae0ea;

  @media (max-width: 780px) {
    padding: 20px;
  }
`

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  & > div {
    flex: 1;
  }

  & > div > h4 {
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  & > div > ul {
    list-style: none;
    padding: 0;
  }

  & > div > ul > li {
    margin-bottom: 15px;

    @media (max-width: 780px) {
      width: 50%;
      display: inline-block;
    }
  }

  & > div > ul > li > a {
    color: #dae0ea;
    display: block;
    font-size: 12px;
    line-height: 18px;
  }
`

export const SocialIcons = styled.div`
  max-width: 249px;

  @media (max-width: 780px) {
    max-width: 100%;
  }

  & > div {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;

    @media (max-width: 780px) {
      justify-content: start;
    }
  }

  & > div > a {
    @media (max-width: 780px) {
      width: 80px;
    }
  }

  & > div > a > img {
    width: 22px;
    height: 22px;
  }
`

export const AppStoreIcons = styled.div`
  & img:first-child {
    margin-right: 15px;
  }
`


export const SectionTwo = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div:last-child {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  & > div > div {
    min-width: 310px;
    padding-top: 52px;
    padding-left: 20px;

    @media (max-width: 780px) {
      width: 100%;
      padding-left: 0;
      padding-top: 22px;
    }
  }

  & > div img {
    display: inline-block;
    max-width: 100px;
    margin: 10px;
  }

  & > div > p {
    font-size: 14px;
    line-height: 1.5;
  }

  & > div > p > small {
    font-size: 12px;
  }

  & > div > ul {
    list-style: none;
    padding: 0;
  }

  & > div > ul > li {
    display: inline-block;
    border-right: solid 1px white;
    margin-right: 10px;
    padding: 3px 10px 4px 0;

    @media (max-width: 780px) {
      border-right: none;
    }
  }

  & > div > ul > li:last-child {
    border-right: none;
    padding-right: 0;
    margin-right: 0;
  }

  & > div > ul > li > a {
    font-size: 12px;
  }

  & > div > ul > li > span {
    display: inline-block;
    margin: 0 10px;
  }
`

export const WidgetInfo = styled.div`
  min-width: 290px;
`