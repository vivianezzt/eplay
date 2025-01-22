import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assests/images/logo.svg'
import carrinho from '../../assests/images/carrinho.svg'
const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Logo" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      <span>0 - Produtos(s)</span>
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
