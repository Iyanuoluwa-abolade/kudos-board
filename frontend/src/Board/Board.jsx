import React, {useState} from 'react';
import "./Board.css";

function Board(props) {
    // const [imageUrl, setImageUrl] = useState('');
    // useEffect(() => {
    //     fetch('https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${category}&rating=g')
    //         .then(response => response.json())
    //         .then(data => setImageUrl(data.imageUrl));
    // }, []);

    return (
        <div className="board">
            <img src={props.image} alt="GIF"/>
            <h3>{props.title}</h3>
            <p>{props.category}</p>
            <div className="delete-and-view-buttons">
                <button className="view-button" onClick={props.displayBoard}>
                    View Board
                </button>
                <button className="delete-button">Delete Board</button>
            </div>
        </div>

    )
}
export default Board;
