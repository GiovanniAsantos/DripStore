import './OfertasPersonalizadas.css'
import WhiteSneakers from '../../assets/WhiteSneakers.png'
import Ornament from '../../assets/Ornament.png'
import CarouselDots from '../../assets/CarouselDots.png'

function OfertasPersonalizadas() {
    return (
      <>
        <section className="divOfertasPai">
            <div className="divOfertasFIlho1">
              <p className='p1DivOfertasFilho1'>Melhores ofertas personalizadas</p>
              <h1 className='h1DivOfertasFilho1'>Queima de Estoque Nike 🔥</h1>
              <p className='p2DivOfertasFIlho1'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <button className='btnOfertas'>Ver Ofertas</button>
            </div>
              <img className='OrnamentOferta' src={Ornament} alt="" />
              <img className='SneakersOferta' src={WhiteSneakers} alt="" />
              <img className='CarouselDotsOfertas' src={CarouselDots} alt="" />
        </section> 
      </>
    )
  }
  
  export default OfertasPersonalizadas; 