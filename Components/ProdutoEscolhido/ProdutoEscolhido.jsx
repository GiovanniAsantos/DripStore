import './ProdutoEscolhido.css'
import HeaderHome from '../HeaderHome/HeaderHome';
import CardPEA from '../ProdutosEmAlta/CardPEA/CardPEA';
import Footer from '../Footer/Footer';
import SetaPEA from '../../assets/SetaPEA.png'
import WhiteSneakers from '../../assets/WhiteSneakers.png'
import Stars from '../../assets/Stars.png'
import Frame from '../../assets/Frame.png'


function ProdutoEscolhido () {
    return(
        <>
        <HeaderHome />
        <section className='bodyProdutoEscolhido'>
            <div className='divTitleProdutoEscolhido'>
                    <p className='titleProdutoEscolhido'>
                        <strong>Home</strong>/Produtos/Tênis/Nike/Tênis Nike Revolution 6 Next Nature Masculino
                    </p>
            </div>
            <div className='divPaiProdutoEscolhido'>
                <div className='divFilhoProdutoEscolhido1'>
                    <div className='divImgGrande'>
                        <img className='tenisMaior' src={WhiteSneakers} alt="" />
                    </div>
                    <div className='divPaiPequenasImgs'>
                        <div className='divPequenasImg1s'>
                            <img className='tenisMenor' src={WhiteSneakers} alt="" />
                        </div>
                        <div className='divPequenasImgs2'>
                            <img className='tenisMenor' src={WhiteSneakers} alt="" />
                        </div>
                        <div className='divPequenasImgs3'>
                            <img className='tenisMenor' src={WhiteSneakers} alt="" />
                        </div>
                        <div className='divPequenasImgs4'>
                            <img className='tenisMenor' src={WhiteSneakers} alt="" />
                        </div>
                        <div className='divPequenasImgs5'>
                            <img className='tenisMenor' src={WhiteSneakers} alt="" />
                        </div>
                    </div>
                </div>
                <div className='divFilhoProdutoEscolhido2'>
                    <h1 className='titleDivPE2'>Tênis Nike Revolution 
                    6 Next Nature Masculino</h1>
                    <p className='pDivPE2'>Casual | Nike | REF:38416711</p>
                    <div className='miniDivAvaliacao'>
                        <img src={Stars} alt="" />
                        <img src={Frame} alt="" />
                        <p>(90 avaliações)</p>
                    </div>
                    <div className='miniDivAvaliacao2'>
                        <p className='cifrao'>R$ </p>
                        <h1 className='h1miniDivAvaliacao2'>219,00</h1>
                        <p className='pminiDivAvaliacao2'>219,00</p>
                    </div>  
                    <div className='miniDivAvaliacao3'>
                        <p className='p1miniDivAvaliacao2'>Descrição do produto</p>
                        <p className='p2miniDivAvaliacao2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div>
                        <div className='tamanho1'>
                            <p className='ptamanho1'>Tamanho</p>
                            <div className='divTamanhoBtns'>
                            <button className='btnSize'>39</button>
                            <button  className='btnSize'>40</button>
                            <button  className='btnSize'>41</button>
                            <button  className='btnSize'>42</button>
                            <button  className='btnSize'>43</button>
                            </div>
                        </div>
                    </div>
                    <div className='tamanho2'>
                    <p className='ptamanho2'>tamanho</p>
                        <div className='divbtnSizeColors'>
                        <button className='btnSizeColor1'></button>
                        <button className='btnSizeColor2'></button>
                        <button className='btnSizeColor3'></button>
                        <button className='btnSizeColor4'></button>
                        </div>
                    </div>

                    <div className='divBtnBuy'>
                        <button className='btnBuy'>Comprar</button>
                    </div>
                </div>
            </div>



            <div className='divTitleCardPE'>
                    <h3>Produtos Relacionados</h3>
                    <a className='linkProdutos' href="/Produtos"><p className='pVerTodosProdutos'>Ver todos</p>
                        <img src={SetaPEA}alt=""/>
                    </a>
            </div>
            <div className='divCardPEPage'>
                    <CardPEA
                    id="tenis1"
                    subtitle="30% OFF"
                    title="tenis"
                    subtitle2="tenis adidas super legal"
                    price="$200"
                    promotion="$100"
                    />
                    <CardPEA
                    id="tenis1"
                    subtitle="30% OFF"
                    title="tenis"
                    subtitle2="tenis adidas super legal"
                    price="$200"
                    promotion="$100"
                    />
                    <CardPEA
                    id="tenis1"
                    subtitle="30% OFF"
                    title="tenis"
                    subtitle2="tenis adidas super legal"
                    price="$200"
                    promotion="$100"
                    />
                    <CardPEA
                    id="tenis1"
                    subtitle="30% OFF"
                    title="tenis"
                    subtitle2="tenis adidas super legal"
                    price="$200"
                    promotion="$100"
                    />
            </div>
        </section>


        
        <Footer />
        </>
    )
}

export default ProdutoEscolhido;