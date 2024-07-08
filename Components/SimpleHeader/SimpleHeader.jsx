import './SimpleHeader.css'
import Logo from '../../assets/Logo.png'

function SimpleHeader() {
    return (
      <>
        <section className='simpleHeader'>
            <div className='imgLogoSimpleHeader'>
                <a href="/"><img src={Logo} alt="" /></a>
            </div>

        </section>
      </>
    )
  }
  
  export default SimpleHeader; 