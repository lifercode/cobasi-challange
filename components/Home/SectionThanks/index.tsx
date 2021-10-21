import Wrapper from '../../../containers/Wrapper'
import { DesktopView } from '../../../containers/Responsive'
import AnimatedComponents from '../../../containers/AnimatedComponents'
import Image from '../../../containers/Image'
import { components, classes } from './animation'
import {
  Container,
  Content,
  AboutContainer
} from './styles'

const SectionThanks = () => (
  <Container>
    <Wrapper size="lg">
      <DesktopView>
        <AnimatedComponents components={components}/>
      </DesktopView>
      <Content>
        <AboutContainer>
          <div className={classes[0]}>
            <p>Já são <span>36 anos de muitos momentos especiais.</span></p>
            <br /><br />
            <p>
              Cada rabinho abanando ou ronronado de felicidade dá brilho à nossa história.
            </p>
            <br /><br />
            <p>Aos nossos clientes:</p>
            <h4>OBRIGADA!</h4>
          </div>
          <Image
            src="/img/section-four/component-4.svg"
            alt="component-4"
            className={classes[1]} 
          />
        </AboutContainer>
        <Image
          src="/img/section-four/component-3.png"
          alt="component-3"
          className={classes[2]}
        />
      </Content>
    </Wrapper>
  </Container>
)

export default SectionThanks