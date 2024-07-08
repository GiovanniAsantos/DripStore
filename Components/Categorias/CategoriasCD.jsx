import './CategoriasCD.css'
import Itens from '../Categorias/ItensCategoriasCD/Itens'
import TshirtItem from '../../assets/TshirtItem.png'
import PantsItem from '../../assets/PantsItem.png'
import HeadphoneItem from '../../assets/HeadphoneItem.png'
import SneakersItem from '../../assets/SneakersItem.png'

function CategoriasCD(){
    return (
        <>
          <section className='CategoriasCD'>
            <h3 className='titleCategoriasCD'>Coleções em Destaque</h3>

            <div className='divItensCategoriasCD'>
                <Itens
                    foto={TshirtItem} 
                    label="Camisetas"
                />

                <Itens
                foto={PantsItem} 
                label="Calças"
                />

                <Itens
                foto={PantsItem} 
                label="Bonés"
                />

                <Itens
                foto={HeadphoneItem} 
                label="Headphones"
                />

                <Itens
                foto={SneakersItem} 
                label="Tênis"
                />
            </div>

          </section>
            
        </>
      )
}

export default CategoriasCD