import "./Footer.css"
import WhiteLogo from '../../assets/WhiteLogo.png'
import RedesSociais from '../../assets/RedesSociais.png'

function Footer() {
    return (
      <>
        <section className="Footer">
            <div className="divFooterPai">
                <div className="divFooterFilho1">
                    <img  src={WhiteLogo} alt="" />
                    <p className="pDivFilho1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <img className="redesDivFilho1" src={RedesSociais} alt="" />
                </div>
                <div className="divFooterFilho2">
                    <h3>Informação</h3>
                    <p>Sobre Dripstore</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe Conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div className="divFooterFilho3">
                <h3> Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className="divFooterFilho4">
                <h3> Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <hr className="hrFooter" />
            <p className="pFinalFooter">@2024 Digital College; By Giovanni Azevedo</p>
        </section>
      </>
    )
  }
  
  export default Footer; 