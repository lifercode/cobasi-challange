import React from 'react'
import styled from 'styled-components'

import Image from './Image'

type PositionType = {
  x: number
  y: number
}

type AnimatedClassType = {
  effect?: string
  speed?: string
  delay?: string
}

type AnimatedComponentType = {
  imgPath: string
  zIndex: number
  position: PositionType
  animateClass: AnimatedClassType
}

type AnimatedComponentProps = {
  component: AnimatedComponentType
}

type AnimatedComponentsProps = {
  components: AnimatedComponentType[]
  extra?: React.ReactElement
}

type AnimatedComponentContainerProps = {
  positionX: number
  positionY: number
  zIndex: number
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1663px;
  zoom: 0.8;
`

const AnimatedComponentContainer = styled.div`
  position: absolute;
  top: ${({ positionY }: AnimatedComponentContainerProps) => positionY}px;
  left: ${({ positionX }: AnimatedComponentContainerProps) => positionX}px;
  z-index: ${({ zIndex }: AnimatedComponentContainerProps) => zIndex};
`

const AnimatedComponent = ({ component }: AnimatedComponentProps) => {
  const classes = `animate__animated 
    ${component.animateClass.effect} 
    ${component.animateClass.speed} 
    ${component.animateClass.delay}`

  return (
    <AnimatedComponentContainer
      key={component.imgPath}
      positionX={component.position.x}
      positionY={component.position.y}
      zIndex={component.zIndex}
      className={classes}
    >
      <Image src={component.imgPath} alt={component.imgPath}/>
    </AnimatedComponentContainer>
  )
}

const AnimatedComponents = ({ components, extra }: AnimatedComponentsProps) => (
  <Container>
    {extra}
    {components.map((item: AnimatedComponentType) => (
      <AnimatedComponent key={item.imgPath} component={item} />
    ))}
  </Container>
)

export default AnimatedComponents