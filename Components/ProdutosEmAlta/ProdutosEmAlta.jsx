import './ProdutosEmAlta.css'
import CardPEA from './CardPEA/CardPEA';
import SetaPEA from '../../assets/SetaPEA.png'

function ProdutosEmAlta() {
    return (
      <>
        <section className='produtosEmAlta'>
            <div className='titleProdutosEmAlta'>
                <h3 className='h3itleProdutosEmAlta'>Produtos Em Alta</h3>
                <div className='verTodosProdutos'>
                    <a className='linkProdutos' href="/Produtos"><p className='pVerTodosProdutos'>Ver todos</p>
                    <img src={SetaPEA}alt=""/>
                    </a>
                    
                </div>
            </div>
            <div className='cardTenisProdutos'>
              {/* gere uma API com mockAPI, e substitua la as seguintes coisas,
              title=Product,
              price=number,
              promotion=number */}
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
  
  export default ProdutosEmAlta; 