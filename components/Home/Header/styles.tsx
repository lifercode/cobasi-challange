import styled from 'styled-components'

export const Container = styled.div`
  background-color: #00a3b4;
  padding: 25px 0px;

  @media (max-width: 780px) {
    padding: 10px 0px;
  }

  > div > div {
    display: flex;
    flex-direction: row;
  }

  > div > div > .menu-btn {
    @media (max-width: 780px) {
      margin-top: 13px;
      margin-left: 20px;
    }
  }

  > div > div > .header-logo {
    @media (max-width: 780px) {
      margin: 10px auto;
      width: 100px;
    }
  }

  > div > div > img {
    margin-right: 50px;

    @media (max-width: 780px) {
      margin-right: 0;
    }
  }
`

export const SearchForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media (max-width: 780px) {
    padding: 10px 20px;
  }

  & > input {
    flex: 1;
    border: 0;
    border-radius: 5px;
    color: #7f7f7d;
    font-size: 14px;
    padding: 12px 60px 12px 23px;
    position: relative;
    z-index: 0;
  }

  & > button {
    background-color: #ec8213;
    border: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    color: #fff;
    cursor: pointer;
    height: 90%;
    outline: none;
    width: 50px;
    margin-top: 2px;
    margin-left: -52px;
    z-index: 1;
  }
`

export const ActionMenu = styled.div`
  flex-direction: row;
  display: flex;
  padding: 5px 0 4px;

  @media (max-width: 780px) {
    padding: 9px 10px 0 0;
    margin-bottom: -19px;
  }

  & > div {
    margin-left: 20px;
  }

  & > div > img {
    margin-right: 10px;
  }

  & > div > a {
    display: inline-block;
    color: #fff;
    font-size: 16px;
    margin-bottom: 0;

    @media (max-width: 780px) {
      display: none;
    }
  }

  & > div > a > span {
    color: #fff;
    font-size: 12px;
    line-height: 1.2;
    text-decoration: underline;
    display: block;
  }

  & > div > a > small {
    display: block;
    font-weight: 600;
  }

  & > div > a > span > img {
    margin-left: 5px;
  }
`
export const ActionMenuItem = styled.div``

export const MenuContainer = styled.div`
  height: 48px;
  background-color: #0595a6;

  @media (max-width: 780px) {
    display: none;
  }

  & > div > div {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`

export const MenuDropdown = styled.div`
  & > a {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin: 14px 0;
    display: inline-block;
  }

  & > a > img {
    margin: 0 10px -4px 0;
  }
`

export const Menu = styled.div`
  display: flex;
  flex: 1;
  
  & > ul {
    text-align: right;
    list-style: none;
    padding: 0;
    width: 100%;
  }

  & > ul > li {
    display: inline-block;
    padding: 0 17px;
  }

  & > ul > li > a {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }

  & > ul > li > a > span {
    background-color: #fe8535;
    border-radius: 4px;
    color: #fff;
    margin-left: 5px;
    padding: 1px 5px;
    font-size: 12px;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: inherit;
  }
`

export const Desktop = styled.div`
  display: inherit;

  @media (max-width: 780px) {
    display: none;
  }
`
