import { Image, Title, Prices } from './styles'
import bannerImg from '../../assests/images/banner-homem-aranha.png'
import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>
          Marvel&apos;S Spider-Man: <br />
          Morales PS$ & PS5
        </Title>
        <Prices>
          De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
        </Prices>
      </div>
      <ButtonLink
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </ButtonLink>
    </div>
  </Image>
)
export default Banner
