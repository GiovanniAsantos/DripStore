import './ProdutosFilterPage.css'
import OrderFilter from '../../Components/FilterOrder/OrderFilter'
import CardPEA from '../ProdutosEmAlta/CardPEA/CardPEA'; 
import FilterMain from '../../Components/MainFilter/FilterMain'

function ProdutosFilterPage() {
    return (
      <>
        <section className='bodyProdutosFilterPage'>
            <div className='divPaiFIlterPage1'>
                <div className='divProdutosFilterPage1'>
                    <strong className='pFilterPageTipo1'><p className='pFilterPageTipo1'>Resultados para “Tênis”-</p></strong>
                    <p className='pFilterPageTipo2'>389 produtos</p>                    
                </div>
                <OrderFilter/>
            </div>
            <div>
              <FilterMain/>
            </div>
            <div className='divPaiFilterPage2'>
            <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
                <CardPEA
                id="tenis1"
                subtitle="30% OFF"
                title="tenis"
                subtitle2="tenis adidas super legal"
                price="$200"
                promotion="$100"
                />
            </div>
        </section>
      </>
    )
  }
  
  export default ProdutosFilterPage; 