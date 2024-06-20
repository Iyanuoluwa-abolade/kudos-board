// import React, { useState } from 'react';
// import Board from "../Board/Board";
// import "./BoardList.css";


// function BoardList(props) {


//             <Board
//                 key={board.id}
//                 deleteBoard={() => props.deleteBoard(board.id)}
//                 displayBoard={() => handleBoardClick(board.id)}
//                 image_url={board.image_url}
//                 title={board.title}
//                 category={board.category}
//                 handleSetBoard={() => props.handleSetBoardId(board.id)}
//             />


//     return (
//         <div className="board-list">
//             {props.board.map(board)}
//         </div>
//     )

// }

// export default BoardList;

import React, { useState, useEffect } from 'react';
import Board from "../Board/Board";
import "./BoardList.css";



function BoardList(props) {

    const [boards, setBoards] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/boards')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBoards(data)
            });
    }, []);

    return (
        <div className="board-list">
            {boards.map(board => (
                <Board
                    key={board.id}
                    name={board.name}
                    description={board.description}
                    image={board.image_url}
                    displayBoard={props.handleDisplayBoardPage}
                />
            ))}


        </div>
    );
}

export default BoardList;


// import React, { useState, useEffect } from 'react';
// import Board from "../Board/Board";
// import "./BoardList.css";

// function BoardList(props) {
//   const [boards, setBoards] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:3000/boards')
//       .then(response => response.json())
//       .then(data => setBoards(data));
//   }, []);

//   return (
//     <div className="board-list">
//       {boards.map(board => (
//         <Board
//           key={board.id}
//           name={board.name}
//           description={board.description}
//           image={board.image}
//           displayBoard={props.handleDisplayBoardPage}
//         />
//       ))}
//     </div>
//   );
// }

// export default BoardList;
