import './LoginPatternBody.css'
import SneakersLoginBody1 from '../../assets/SneakersLoginBody1.png'
import SneakersLoginBody2 from '../../assets/SneakersLoginBody2.png'

function Login() {
    return (
      <>
        <section className='loginBody'>
                <img className='sapato1LoginBody' src={SneakersLoginBody1} alt="" />
                <img className='sapato2LoginBody' src={SneakersLoginBody2} alt="" />
        </section>
      </>
    )
  }
  
  export default Login; 