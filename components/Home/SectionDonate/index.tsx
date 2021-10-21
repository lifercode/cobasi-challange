import AnimatedComponents from '../../../containers/AnimatedComponents'
import Wrapper from '../../../containers/Wrapper'
import Image from '../../../containers/Image'
import { DesktopView } from '../../../containers/Responsive'
import { components, classes } from './animation'
import ongs from './ongs'
import {
  Container,
  SectionTitle,
  CounterCard,
  AboutCard,
  AboutCardHeader,
  ImageCircle,
  SubSection,
  SubSectionColumn,
  SelectOngsContainer,
  FeaturedQuantity
} from './styles'

const SectionDonate = () => (
  <Container>
    <Wrapper size="lg">
      <DesktopView>
        <AnimatedComponents components={components} />
      </DesktopView>
      <SectionTitle>
        <h2 className={classes[0]}>
          Reunimos as maiores marcas de ração{' '}
          <span>para levar momentos especiais para os animais sem lar.</span>
          <br />
          <br />
          A cada pacote de ração comprada,<br />duas refeições serão doadas.
        </h2>
      </SectionTitle>
      <div>
      <SubSection>
        <SubSectionColumn>
          <h4 className={classes[1]}>Contador de doações:</h4>
          <CounterCard className={classes[2]}>
            <h3>1.305.524</h3>
            <p>refeições doadas</p>
            <span>Tempo restante:</span>
            <h4>0d, 0h, 0m</h4>
          </CounterCard>
        </SubSectionColumn>
        <ImageCircle src="/img/dog.png">
          <div className={classes[3]}/>
          <span className={classes[4]} />
          <Image
            src="/img/icon-dog.svg"
            alt="icon-dog"
            className={classes[5]}
          />
        </ImageCircle>
      </SubSection>
      <SubSection>
        <ImageCircle src="/img/cat.png">
          <div className={classes[6]}/>
          <span className={classes[7]} />
          <Image
            src="/img/icon-cat.svg"
            alt="icon-cat"
            className={classes[8]}
          />
        </ImageCircle>
        <SubSectionColumn>
          <AboutCard className={classes[9]}>
            <AboutCardHeader className={classes[10]}>
              <h4>É Nossa Causa</h4>
              <Image src="/img/stars.svg" alt="icon-start" />
            </AboutCardHeader>
            <p>
              A causa animal <span>sempre foi nossa prioridade.</span><br />Desde 1998, doamos remédios, produtos de limpeza e outros itens pet para ONGs e protetores.
            </p>
          </AboutCard>
          <FeaturedQuantity className={classes[11]}>
            <Image src="/img/featured-quantitys.svg" alt="featured-quantity" />
            <p>
              Além disso, colaboramos para <span>centenas de castrações</span> e mais de <span>30 mil adoções</span> de cães e gatos.
            </p>
          </FeaturedQuantity>
        </SubSectionColumn>
      </SubSection>
      </div>
      <SelectOngsContainer className={classes[12]}>
        <p>
          Além disso, colaboramos para <span>centenas de castrações</span> e mais de <span>30 mil adoções</span> de cães e gatos.
        </p>
        <h4>Confira as ONGs participantes:</h4>
        <div>
          <label>Instituição:</label>
          <select>
            {ongs.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>
      </SelectOngsContainer>
    </Wrapper>
  </Container>
)

export default SectionDonate