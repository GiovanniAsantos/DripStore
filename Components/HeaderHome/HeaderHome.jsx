import "./HeaderHome.css"
import Logo from "../../assets/Logo.png"
import Search from'../../assets/Search.png'
import Buy from '../../assets/Buy.png'

function HeaderHome() {
    return (
      <>
      <section className="HeaderHome">
        <div className="divPaiHeaderHome">
            <div className="divFIlhoHeaderHome1">
                <img src={Logo} alt="" />
             <div>
                <input className="inputHeader" placeholder="Pesquisar Produto..." type="text" />
                <img className="lupa" src={Search} alt="" />
              </div>           
                <a className="linkCadastroHeader" href="/Register">Cadastre-se</a>
                <a href="/Login"><button className="btnHeader">Entrar</button></a>
                <button className="btnShopHeader"><img src={Buy} alt="" /></button>                
            </div>
            <div className="divFilhoHeaderHome2">
                <nav className="navbarHeader">
                  {/* transformar esses p´s em links e importar na home depois!! */}
                    <a className="aHomePage" href="/"><p className="pHeader">Home</p></a> 
                    <a className="aHomePage" href="/Produtos"><p className="pHeader">Produtos</p></a>
                    <a className="aHomePage" href=""><p className="pHeader">Categorias</p></a>
                    <a className="aHomePage" href=""><p className="pHeader">Meus Pedidos</p></a>
                </nav>
            </div>
        </div>
      </section>
      </>
    )
  }
  
  export default HeaderHome; 