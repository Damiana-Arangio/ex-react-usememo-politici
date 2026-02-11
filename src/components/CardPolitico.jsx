function CardPolitico(props) {
    const {politico} = props;

    return(
        <article className="card-politico">
            <h2>{politico.name}</h2>
            <h3>{politico.position}</h3>
            <img src={politico.image} alt="immagine politico" />
            <p>{politico.biography}</p>
        </article>
    )
}

export default CardPolitico;