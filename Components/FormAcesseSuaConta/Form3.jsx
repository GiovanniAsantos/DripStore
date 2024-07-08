import './Form3.css'
import InputForm from '../InputParaForm/InputForm';
import RedesSociaisDeAcesso from '../../assets/RedesSociaisDeAcesso.png'

function Form3() {
    return (
      <>
        <div className='formBox3'>
            <h3 className='titleForm3' >Acesse Sua Conta</h3>
            <p className='pForm3'>Novo Cliente? Então registre-se <a className='aForm3' href="/Register">aqui.</a></p>
            <InputForm
            label="Login*"
            placeholder="Insira seu login ou email"
            />
            <InputForm
            label="Senha*"
            placeholder="Insira sua senha"
            />
            <a className='aForm3' href="">Esqueci minha senha</a>
            <button className='btnForm3'>Acessar Conta</button>
            <div className='divBaseForm3'>
                <p className='pForm3'>Ou faça Login Com</p><img className='imgForm3' src={RedesSociaisDeAcesso} alt="" />
            </div>
            
        </div>
      </>
    )
  }
  
  export default Form3; 