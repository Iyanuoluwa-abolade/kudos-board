import "./Button.css"

function Button(props) {
    return (
        <button onClick={() =>
            {props.name.includes("create") ? props.displayForm(): null}

        }>{props.name}</button>
    )
}

export default Button;
