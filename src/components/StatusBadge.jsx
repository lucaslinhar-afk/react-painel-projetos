import './StatusBadge.css'

function Status (props) {
    return (
        <>
            <p className={
                props.status === 'Concluído' ? 'concluido' :
                props.status === 'Em Andamento' ? 'emAndamento' :
                props.status === 'Pendente' ? 'pendente' :
                props.status === 'Planejamento' ? 'planejamento' :
                'Erro'
                     }>
                {props.status}
             </p>
        </>
    )
}

export default Status;