import Link from 'next/link'

import Wrapper from '../../../containers/Wrapper'
import { DesktopView, MobileView } from '../../../containers/Responsive'
import Image from '../../../containers/Image'
import menu from './menu'
import {
  Container,
  MenuContainer,
  SearchForm,
  ActionMenu,
  ActionMenuItem,
  Menu,
  MenuDropdown
} from './styles'

const imageStyle = {
  filter: 'invert(1)'
}

const MobileHeader = () => (
  <MobileView>
    <Container>
      <Wrapper>
        <div>
          <Image
            src="/img/icons/menu.svg"
            alt="search-icon"
            width="20"
            height="20"
            style={imageStyle}
            className="menu-btn"
          />
          <Image
            src="/img/logo-cobasi.svg"
            alt="logo-cobasi"
            className="header-logo"
          />
          <ActionMenu>
            <ActionMenuItem>
              <Image
                src="/img/icons/person.svg"
                alt="search-icon"
                width="30"
                height="30"
                style={imageStyle}
              />
            </ActionMenuItem>
            <ActionMenuItem>
              <Image
                src="/img/icons/cart.svg"
                alt="search-icon"
                width="30"
                height="30"
                style={imageStyle}
              />
            </ActionMenuItem>
          </ActionMenu>
        </div>
        <div>
          <SearchForm>
            <input placeholder="Para seu pet ou sua casa, procure aqui..." />
            <button>
              <Image
                src="/img/icons/search.svg"
                alt="search-icon"
                width="25"
                height="25"
                style={imageStyle}
              />
            </button>
          </SearchForm>
        </div>
      </Wrapper>
    </Container>
    <MenuContainer>
      <Wrapper>
        <div>
          <MenuDropdown>
            <Link href="/" passHref>
              <a>
                <Image
                  src="/img/icons/menu.svg"
                  alt="search-icon"
                  width="20"
                  height="20"
                  style={imageStyle}
                />
                Seu Pet e Sua Casa
                <Image
                  src="/img/icons/arrow-bottom.svg"
                  alt="search-icon"
                  width="20"
                  height="20"
                  style={imageStyle}
                />
              </a>
            </Link>
          </MenuDropdown>
          <Menu>
            <ul>
              {menu.map((item) => (
                <li key={item}>
                  <Link href="/" passHref>
                    <a>
                      {item === 'Serviços Pet' ? (
                        <>
                          {item} <span>Novo</span>
                        </>
                      ) : item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        </div>
      </Wrapper>
    </MenuContainer>
  </MobileView>
)

const DesktopHeader = () => (
  <DesktopView>
    <Container>
      <Wrapper>
        <div>
          <Image src="/img/logo-cobasi.svg" alt="logo-cobasi" />
          <SearchForm>
            <input placeholder="Para seu pet ou sua casa, procure aqui..." />
            <button>
              <Image
                src="/img/icons/search.svg"
                alt="search-icon"
                width="25"
                height="25"
                style={imageStyle}
              />
            </button>
          </SearchForm>
          <ActionMenu>
            <ActionMenuItem>
              <Image
                src="/img/icons/person.svg"
                alt="search-icon"
                width="30"
                height="30"
                style={imageStyle}
              />
              <Link href="/" passHref>
                <a>
                  Bem vindo
                  <span>
                    Entre ou Cadastre-se
                    <Image
                      src="/img/icons/arrow-bottom.svg"
                      alt="search-icon"
                      width="10"
                      height="10"
                      style={imageStyle}
                    />
                  </span>
                </a>
              </Link>
            </ActionMenuItem>
            <ActionMenuItem>
              <Image
                src="/img/icons/cart.svg"
                alt="search-icon"
                width="30"
                height="30"
                style={imageStyle}
              />
              <Link href="/" passHref>
                <a>
                  Carrinho
                  <small>0 item</small>
                </a>
              </Link>
            </ActionMenuItem>
          </ActionMenu>
        </div>
      </Wrapper>
    </Container>
    <MenuContainer>
      <Wrapper>
        <div>
          <MenuDropdown>
            <Link href="/" passHref>
              <a>
                <Image
                  src="/img/icons/menu.svg"
                  alt="search-icon"
                  width="20"
                  height="20"
                  style={imageStyle}
                />
                Seu Pet e Sua Casa
                <Image
                  src="/img/icons/arrow-bottom.svg"
                  alt="search-icon"
                  width="20"
                  height="20"
                  style={imageStyle}
                />
              </a>
            </Link>
          </MenuDropdown>
          <Menu>
            <ul>
              {menu.map((item) => (
                <li key={item}>
                  <Link href="/" passHref>
                    <a>
                      {item === 'Serviços Pet' ? (
                        <>
                          {item} <span>Novo</span>
                        </>
                      ) : item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        </div>
      </Wrapper>
    </MenuContainer>
  </DesktopView>
)

const Header = () => (
  <>
    <DesktopHeader />
    <MobileHeader />
  </>
)

export default Header