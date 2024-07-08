import InputForm from "../InputParaForm/InputForm"
import "./Form2.css"
function Form2() {
    return (
      <>
        <div className="formBox2">
          <p className="pForm2">Informações De Entrega</p>
          <hr className="hrForm" />
        <InputForm
          label="Endereço*"
          placeholder="Insira seu Endereço"
        />

        <InputForm
          label="Bairro *"
          placeholder="Insira seu Bairro"
        />

        <InputForm
          label="Cidade*"
          placeholder="Insira seu Cidade"
        />

        <InputForm
          label="Cep*"
          placeholder="Insira seu Cep"
        />

        <InputForm
          label="Complemento*"
          placeholder="Insira seu Complemento"
        />
        </div>
      </>
    )
  }
  
  export default Form2