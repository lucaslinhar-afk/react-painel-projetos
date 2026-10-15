import Status from "./StatusBadge"; 
import TecnologiaTag from "./TecnologiaTag";  

function ProjetoCard(props) {
  return (
    <>
      <div className="card">
        <h2>{props.titulo}</h2>
        <p>{props.descricao}</p>
        <p>{props.responsavel}</p>

        <Status status={props.status} />
        
        {props.tecnologias?.map((t, index) => (
          <TecnologiaTag key={index} nome={t} />
        ))}
        
        <p>{props.destaques}</p>
      </div>
    </>
  )
}

export default ProjetoCard;