import Link from 'next/link'

import Wrapper from '../../../containers/Wrapper'
import Image from '../../../containers/Image'
import socialIcons from './social'
import menu from './menu'
import {
  Container,
  SectionOne,
  SectionTwo,
  SocialIcons,
  AppStoreIcons,
  WidgetInfo
} from './styles'

const imageStyle = {
  filter: 'invert(1)'
}

const Footer = () => (
  <Container>
    <Wrapper>
      <SectionOne>
        {menu.map(({ title, data }, index) => (
          <div key={index}>
            <h4>{title}</h4>
            <ul>
              {data.map((item) => (
                <li key={item}>
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <WidgetInfo>
          <h4>Siga a Cobasi nas redes sociais</h4>
          <SocialIcons>
            <div>
              {socialIcons.map(({ imagePath, imageAlt }) => (
                <Link href="/" passHref key={imageAlt}>
                  <a>
                    <Image
                      src={imagePath}
                      alt={imageAlt}
                      style={imageStyle}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </SocialIcons>
          <h4>Baixe nosso aplicativo</h4>
          <AppStoreIcons>
            <Link href="/" passHref>
              <Image src="/img/icons/appstore.png" alt="appstore-icon" />
            </Link>
            <Link href="/" passHref>
              <Image src="/img/icons/googleplay.png" alt="googleplay-icon" />
            </Link>
          </AppStoreIcons>
        </WidgetInfo>
      </SectionOne>
      <SectionTwo>
        <div>
          <p>
            <small>
              <strong>Formas de pagamento:</strong> Visa,  MasterCard, Diners Club,  American Express; Boleto bancário;  Elo e Apple Pay.
            </small>
          </p>
          <p>
            <small>
              * As promoções, parcerias e descontos contidos em nosso site não são cumulativos. Diante de duas ou mais promoções,
              será necessário optar por aquela que melhor lhe convém, isentando a Cobasi de qualquer responsabilidade nesse sentido.
              Preços e condições de pagamento exclusivos para compras via internet, podendo variar nas lojas físicas.
              Todas as regras e promoções são válidas apenas para produtos vendidos e entregues pela Cobasi.
              Em caso de divergência de valores no site, o valor válido é o do carrinho de compras.
            </small>
          </p>
          <p>
            COMPRA SEGURA. A Cobasi garante segurança para suas informações pessoais e financeiras.<br />
            Copyright 2019. Todos os direitos reservados à Cobasi.
          </p>
          <p>
            Cobasi - CNPJ 53.153.938/0016-94. Centro de distribuição – Avenida Piramboia nº 2998 - Setor B Cep: 06465-060 - Jardim Santa Cecília - Barueri - SP.
          </p>
          <ul>
            <li><Link href="/">Mapa do site</Link></li>
            <li><Link href="/">Mapa de categorias</Link></li>
            <li><Link href="/">Mapa de produtos</Link></li>
            <li><Link href="/">Mapa de promoções</Link></li>
          </ul>
        </div>
        <div>
          <div>
            <Image src="/img/icons/selo-ebit.png" alt="selo-ebit" />
            <Image
              src="/img/icons/selo-great-place.png"
              alt="selo-great-place"
            />
            <Image
              src="/img/icons/selo-reclameaqui.png"
              alt="selo-reclameaqui"
            />
          </div>
        </div>
      </SectionTwo>
    </Wrapper>
  </Container>
)

export default Footer