import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from './Pages/Register'
import Login from './Pages/Login'
import Produtos from "./Pages/Produtos";
import ProdutoEscolhido from "./Components/ProdutoEscolhido/ProdutoEscolhido";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path='/Register' element={<Register/>} />
        <Route path="/ProdutoEscolhido" element={<ProdutoEscolhido/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
