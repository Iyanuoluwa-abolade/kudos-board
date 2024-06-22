import React, {useState} from 'react';
import "./Board.css";

function Board(props) {
    // const [imageUrl, setImageUrl] = useState('');
    // useEffect(() => {
    //     fetch('https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=${category}&rating=g')
    //         .then(response => response.json())
    //         .then(data => setImageUrl(data.imageUrl));
    // }, []);
    // async function deleteBoard() {
    //     try {
    //         const response = await fetch(`http://localhost:3000/boards/${props.id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (response.ok) {
    //             // Assuming you have a function to refresh the boards list passed as a prop
    //             props.refreshBoards();
    //             console.log('Board deleted successfully');
    //         } else {
    //             console.error('Failed to delete board');
    //         }
    //     } catch (error) {
    //         console.error('Error deleting board:', error);
    //     }
    // }
    return (
        <div className="board">
            <img src={props.image_url} alt="GIF"/>
            <h3>{props.title}</h3>
            <p>{props.category}</p>
            <div className="delete-and-view-buttons">
                <button className="view-button" onClick={() => {
                                                            props.displayBoard()
                                                            props.handleSetBoardId()

                                                        }}>View Board </button>
                <button className="delete-button" onClick={props.deleteBoard}>Delete Board</button>
            </div>
        </div>

    )
}
export default Board;
