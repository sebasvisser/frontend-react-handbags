function Buttonclick(props) {
    return (
        <button type="button" onClick={() => console.log(`${props.children}`)} disabled={props.disabled}>
            {props.children}
        </button>
    );
}

export default Buttonclick;
