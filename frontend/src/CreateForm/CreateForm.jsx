// import "./CreateForm.css";

// function CreateForm(props) {
//   return (
//     <div id="create-form" className="modal-overlay">
//       <div className="modal-content">
//         <span className="close" onClick={props.displayForm}>
//           &times;
//         </span>
//         <h1>Create a new post</h1>
//         <form>
//           <input type="text" placeholder="Title" />
//           <select>
//             <option value="public">Select a category</option>
//             <option value="recent">Recent</option>
//             <option value="celebration">Celebration</option>
//             <option value="thank you">Thank You</option>
//             <option value="inspiration">Inspiration</option>
//           </select>

//           <input type="text" placeholder="Author" />
//           <button className="create-button">Create Board</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateForm;

// import "./CreateForm.css"
// import React, {useState, useEffect} from "react"

// function CreateForm(props) {
//   const [boards, setBoards] = useState([])
//   const [cards, setCards] = useState ([])

//   async function addboard(title, category, author) {
//     try{
//       const response = await fetch("http://localhost:3000/boards", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({title, category, author})
//       })
//       const data = await response.json()
//       setBoards([...boards, data]);
//       PopStateEvent.refreshBoards()

//     } catch(err) {
//       console.log(err)

//     }
//   }
// }
// export default CreateForm;

import "./CreateForm.css"
import React, {useState, useEffect} from "react"
function CreateForm(props) {
  const [boards, setBoards] = useState([])
  const [cards, setCards] = useState([])
  const [showBoards, setShowBoards] = useState(false)
  async function addboard(title, category, author) {
    try{
      const response = await fetch("http://localhost:3000/boards", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, category, author})
      })
      const data = await response.json()
      setBoards([...boards, data]);
      setShowBoards(true)
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div>
      {showBoards && (
        <ul>
          {boards.map((board) => (
            <li key={board.id}>{board.title}</li>
          ))}
        </ul>
      )}
      <button onClick={() => addboard("Board Title", "Category", "Author")}>
        Create Board
      </button>
    </div>
  )
}
export default CreateForm;
