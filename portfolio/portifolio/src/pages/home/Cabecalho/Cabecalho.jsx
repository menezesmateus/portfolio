import './Cabecalho.css'

function cabecalho() {
    return (
        <>
        <div className='header'>
            <a href="/"><h3>Home</h3></a>
            <a href="/projetos"><h3>Projetos</h3></a>
            <a href="/sobre"><h3>Sobre</h3></a>
            <a href="/contato"><h3>Contato</h3></a>
        </div>
        </>
    )
}

export default cabecalho