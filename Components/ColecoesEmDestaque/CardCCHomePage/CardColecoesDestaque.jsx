import './CardColecoesDestaque.css'


function CardColecoesDestaque(props) {
    return (
      <>
          <div className='cardHomePage' id={props.id}>
            <div className='cardContent'>
              <p className='titleCardHomePage'>{props.title}</p>
              <h3 className='descriptionCardHomePage'>{props.description}</h3>
              <button className='btnCardHomePage'>Comprar</button>
            </div>
          </div>
      </>
    )
  }
  
  export default CardColecoesDestaque; 