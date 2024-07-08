
import "./InputForm.css"
function InputForm(props) {
    return (
      <>
      <div className="boxInput1">
        <label className="labelInput" htmlFor="">{props.label}</label>
        <input className="inputFinalParaForm" placeholder={props.placeholder } type="text" />
      </div>
      </>
    )
  }
  
  export default InputForm