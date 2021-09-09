function Tile(props) {
    if(props.imagesrc != null) {
        return (
            <section>
                <img alt={props.altimage} src={props.imagesrc}/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{props.header}</h2>
                <p>{props.paraone}</p>
                <p>{props.paratwo}</p>
            </section>
        );
    }
}

export default Tile;