import styled from 'styled-components'

type WrapperProps = {
  size?: 'md' | 'lg'
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ size = 'md' }: WrapperProps) => size === 'lg' ? 1330 : 1240}px;
  margin: 0 auto;
  display: grid;

  @media (max-width: 780px) {
    max-width: 430px;
  }
`

export default Wrapper