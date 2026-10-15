import './App.css'
import './index.css'
import { projetos } from './db'
import Status from './components/StatusBadge'
import TecnologiaTag from './components/TecnologiaTag'
import ProjetoCard from './components/ProjetoCard'
import Secao from './components/Secao'

function App() {

  return (
    <>
          {
          projetos.map( i => {
            return <Status status={i.status} />
          })
        }

        <hr />

        <TecnologiaTag
        nome = "react"
        />
        <div className='container' >
        {
          projetos.map( i => {
            return <ProjetoCard  
            titulo={i.titulo} 
            descricao={i.descricao} 
            responsavel={i.responsavel} 
            status={i.status} 
            tecnologias={i.tecnologias} 
            destaque={i.destaque} />
          })
        }

        </div>

          <Secao titulo="Projetos da turma">
          {projetos.map(projeto => (
            <ProjetoCard
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              responsavel={projeto.responsavel}
              status={projeto.status}
              tecnologias={projeto.tecnologias}
              destaques={projeto.destaques}
            />
          ))}
        </Secao>


    </>
  )
}

export default App
