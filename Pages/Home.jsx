import Footer from "../Components/Footer/Footer";
import HeaderHome from "../Components/HeaderHome/HeaderHome";
import OfertasPersonalizadas from "../Components/OfertasPersonalizadas/OfertasPersonalizadas";
import ColecoesDestaque from '../Components/ColecoesEmDestaque/ColecoesDestaque'
import CategoriasCD from "../Components/Categorias/CategoriasCD";
import ProdutosEmAlta from "../Components/ProdutosEmAlta/ProdutosEmAlta";
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial";

function Home() {
    return (
      <>
        <HeaderHome></HeaderHome>
        <OfertasPersonalizadas></OfertasPersonalizadas>
        <ColecoesDestaque></ColecoesDestaque>
        <CategoriasCD></CategoriasCD>
        <ProdutosEmAlta></ProdutosEmAlta>
        <OfertaEspecial></OfertaEspecial>
        <Footer></Footer>
      </>
    )
  }
  
  export default Home;  