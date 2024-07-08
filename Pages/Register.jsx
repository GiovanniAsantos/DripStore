import './Register.css'
import SimpleHeader from '../Components/SimpleHeader/SimpleHeader'
import Form1 from '../Components/FormInformacoesPessoais/Form1'
import Form2 from "../Components/FormInformacoesEndereco/Form2"
import Footer from "../Components/Footer/Footer"

function Register() {
    return (
      <>
        <SimpleHeader/>
        <div className="registerBody">
            <h1 className="titleRegister">Criar Conta</h1>
            <Form1/>
            <Form2/>
          <div className="registerCheckbox">
            <input type="checkbox" name="" id="boxCheck" /><p className='pCheckbox'>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
          </div>
        <button className="btnLogin">Criar Conta</button>
        </div>

        <Footer/>   
      </>
    )
  }
  
  export default Register