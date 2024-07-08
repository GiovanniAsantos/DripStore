import InputForm from "../InputParaForm/InputForm"
import "./Form1.css"
function Form1() {
    return (
      <>
        <div className="formBox1">
          <p className="pForm1">Informações Pessoais</p>
          <hr className="hrForm" />
            <InputForm
                label="Nome completo*"
                placeholder="Insira seu nome"
            />

            <InputForm
                  label="CPF *"
                  placeholder="Insira seu CPF"
            />

            <InputForm
                label="E-mail*"
                placeholder="Insira seu E-mail"
            />

            <InputForm
               label="Celular*"
               placeholder="Insira seu celular"
            />
        </div>
      </>
    )
  }
  
  export default Form1