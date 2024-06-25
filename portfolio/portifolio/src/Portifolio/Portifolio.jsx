import './Portifolio.css'

function portifolio() {
    return (
        <>
            <div className='tudo'>
                <div className='ciano'>
                    <h1 className='nome'>Mateus Souza de Menezes</h1>
                    <div className='divDev'>
                        <h1 className='dev'>Desenvolvedor.</h1>
                        <h1 className='descricao typing-animation'>Ola, seja bem vindo! Neste portfólio vamos ver projetos <br /></h1>
                        <h1 className='descricao typing-animation2'>e trabalhos, e mais informações sobre mim!</h1>
                        <button>Vamos la!</button>
                    </div>
                </div>
                <div className='amarelo'>
                    <img src="../src/assets/foto.jpg" alt="" width="300px" height="300px" />
                </div>
            </div>
        </>
    )
}
export default portifolio