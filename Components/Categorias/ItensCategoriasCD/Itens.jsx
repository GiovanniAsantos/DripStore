import './Itens.css'


function Itens({foto, label}){
    return (
        <>
            <div className="label">
                <div id="item">
                    <img src={foto} alt="" />
                </div>
                <label className='labelItem' htmlFor="">{label}</label>
            </div>
        </>
      )
}

export default Itens