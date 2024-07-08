import './CardPEA.css'
import {useState} from 'react'

function CardPEA(props) {

  const [count,setCount] = useState(0)

  function add(){
    setCount(count+1);
  }

  function sub(){
    setCount(count-1);
  }

    return (
      <>
          <div className="labelCardPEA" id="port-ten-card">
            <div id={props.id} className="card-tenis">
                <p className='cardPEASubtitle'>{props.subtitle}</p>
            </div>
              <p className='cardPEATitle'>{props.title}</p>
              <h4 className='cardPEASubtitle2'>{props.subtitle2}</h4>
            <div className="preco">
              <p id="de">{props.price}</p>
              <p id="por"><strong>{props.promotion}</strong></p>
              <button className='contador' onClick={sub}>-</button>
              <p className='numeroContador'>{count}</p>
              <button className='contador' onClick={add}>+</button>
              <a className='linkProdutoEscolhido' href="/ProdutoEscolhido">
                <button className='verCarrinho' >Ver mais</button>
              </a>
              
              
            </div>
          </div>
      </>
    )
  }
  
export default CardPEA; 