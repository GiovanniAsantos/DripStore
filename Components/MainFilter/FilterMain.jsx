import'./FilterMain.css'


function FilterMain() {
    return (
      <>
        <div className='containerFilterMain'>
            <div className='divInternaFilterMain'>
                <h3 className='titleFilterMain'>Filtrar por</h3>
                <hr className='hrFilterMain'/>
                <h4 className='subtitleFilterMain'>Marca</h4>
                <div className='optnFilterMain'>
                    <input className='chackboxFilterMain' type="checkbox" />
                    <p className='pFilterMain'>Adidas</p>
                </div>
                <div className='optnFilterMain'>
                    <input className='chackboxFilterMain' type="checkbox" />
                    <p className='pFilterMain'>Balenciaga</p>
                </div>
                <div className='optnFilterMain'>
                    <input className='chackboxFilterMain' type="checkbox" />
                    <p className='pFilterMain'>K-swiss</p>
                </div>
                <div className='optnFilterMain'>
                    <input className='chackboxFilterMain' type="checkbox" />
                    <p className='pFilterMain'>Nike</p>
                </div>
                <div className='optnFilterMain'>
                    <input className='chackboxFilterMain' type="checkbox" />
                    <p className='pFilterMain'>Puma</p>
                </div>
                
                <div>
                    <h4 className='subtitleFilterMain'>Categoria</h4>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Esporte e lazer</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Casual</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Utilitário</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Corrida</p>
                    </div>
                </div>
                <div>
                    <h4 className='subtitleFilterMain'>Gênero</h4>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Masculino</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Feminino</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="checkbox" />
                        <p className='pFilterMain'>Unissex</p>
                    </div>
                </div>
                <div>
                    <h4 className='subtitleFilterMain'>Estado</h4>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="Radio" />
                        <p className='pFilterMain'>Novo</p>
                    </div>
                    <div className='optnFilterMain'>
                        <input className='chackboxFilterMain' type="radio" />
                        <p className='pFilterMain'>Usado</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default FilterMain; 