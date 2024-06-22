import React, { useState, useEffect } from "react";
import "./CreateForm.css"
import {useParams} from "react-router-dom"

function CreateForm(props) {
  const [boards, setBoards] = useState([]);
  // const [cards, setCards] = useState([]);
  // const [showBoards, setShowBoards] = useState(false);
  // const [showModal, setShowModal] = useState(false); // new state variable

  async function addBoard(title, category, author) {
    try {
      const response = await fetch("http://localhost:3000/boards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, author }),
      });
      const data = await response.json();
      setBoards([...boards, data]);
      // setShowBoards(true);
      props.refreshBoards()
    } catch (err) {
      console.log(err);
    }
  }


  if(props.formName == "board") {
    return (
      <div id="create-board-form" className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={props.displayForm}>&times;</span>
          <h1>Create a new {props.formName}</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.elements[0].value
            const category = e.target.elements[1].value
            const author = e.target.elements[2].value
            addBoard(title, category, author);
            props.displayForm()
          }}>
              <input type="text" placeholder="Title" />
              <select name="category">
                <option value="public"> Select a category</option>
                <option value="recent"> Recent</option>
                <option value="celebration"> Celebration</option>
                <option value="thank you"> Thank you</option>
                <option value="inspiration"> Inspiration</option>
              </select>

              <input type="text" name="author" placeholder="Author" />
              <button className="create-button"> Create Board</button>
          </form>
        </div>
      </div>
    )
  }



}

export default CreateForm;
