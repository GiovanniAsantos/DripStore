import './ColecoesDestaque.css'
import CardColecoesDestaque from '../ColecoesEmDestaque/CardCCHomePage/CardColecoesDestaque';
    


function ColecoesDestaque() {
    return (
      <>
          <section className='cardDestaque'>
            <div className='titleCardDestaque'>
                <h2>Coleções em Destaque</h2>
            </div>
            <div className='divCardDestaque'>
                <CardColecoesDestaque
                id="card1"
                title='30% OFF'
                description='Novo Drop Supreme'
                />
                <CardColecoesDestaque
                id="card2"
                title='30% OFF'
                description='Coleção Adidas'
                />
                <CardColecoesDestaque
                id="card3"
                title='30% OFF'
                description='Novo Beat Bass'
                />
            </div>
          </section>
      </>
    )
  }
  
  export default ColecoesDestaque; 