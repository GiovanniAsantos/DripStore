import './OrderFilter.css'
import VectorFIlter from '../../assets/VectorFIlter.png'


function OrderFilter() {
    return (
      <>
        <div className='filtroOrdem'>
            <strong className='p1FiltroOrdem'><p className='p1FiltroOrdem'>Ordenar por:</p></strong><p className='p2FiltroOrdem'>mais relevantes</p><img className='imgFilter' src={VectorFIlter} alt="" />
        </div>
      </>
    )
  }
  
  export default OrderFilter; 