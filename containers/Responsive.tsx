import styled from 'styled-components'

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
  }
`