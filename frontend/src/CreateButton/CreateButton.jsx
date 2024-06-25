import "./CreateButton.css"

function CreateButton(props) {
    return (
        <button className="card-button" onClick={() =>
            {props.name.includes("Create") ? props.displayForm(): null}

        }>{props.name}</button>
    )
}

export default CreateButton;
