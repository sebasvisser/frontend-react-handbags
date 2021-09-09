
function Articles(props) {
    return (
        <article>
            <span>{props.spanner}</span>
            <img alt={props.children} src={props.image} />
            <p>{props.children}</p>
            <h4>{props.price}</h4>
        </article>
    );
}

export default Articles;