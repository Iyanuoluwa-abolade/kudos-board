import { useEffect, useState } from "react";
import "./CardList.css";
import CreateButton from "../CreateButton/CreateButton";
import Card from "../Card/Card";
import CreateForm from "../CreateForm/CreateForm";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CommentForm from "../CommentForm/CommentForm";

function CardList(props) {
  const navigate = useNavigate();
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  const [cardId, setCardId] = useState(null);
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  async function receiveCardList() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/boards/${id}/cards`, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setCards(data);
      console.log(data)

    } catch (err) {
      console.log(err);
    }
  }

  function handleNavigateToHome() {
    navigate("/home");
  }

  useEffect(() => {
    receiveCardList();
  }, [id]);

  function handleDisplayCreateForm() {
    console.log("clicked")
    console.log(displayCreateForm)
    setDisplayCreateForm(!displayCreateForm);

  }

  function handleShowCommentForm() {
    setDisplayCommentForm(!displayCommentForm);
  }

  function handleSelectedCardId(id) {
    setCardId(id);
  }

  async function deleteCard(boardId, cardId) {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/boards/${boardId}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          'content-Type': 'application/json'
        },
      });
      if (response.ok) {
        receiveCardList();
      }
    } catch (err) {
      console.log(err);
    }
  }

  function displayCard(card) {
    return (
      <Card
        key={card.id}
        cardId={card.id}
        refreshCards={receiveCardList}
        handleSelectedCardId={() => handleSelectedCardId(card.id)}
        upVote={card.upVote}
        deleteCard={() => deleteCard(props.boardId, card.id)}
        author={card.author}
        handleDisplayCommentForm={handleShowCommentForm}
        image_url={card.image_url}
        message={card.message}
      />
    );
  }

  return (
    <>
      <div className="black-arrow">
      <i onClick={handleNavigateToHome} className="fa-solid fa-arrow-left"></i>
      </div>

        {displayCreateForm ?
          <CreateForm displayForm={handleDisplayCreateForm} refreshCards={receiveCardList} formName={"card"}/> :
        null}
      <CreateButton
        name="Create New Card"
        displayForm={handleDisplayCreateForm}
      />
      <div className="card-list">
        {cards.map(displayCard)}
      </div>
      {displayCommentForm && (
        <CommentForm refreshComments={receiveCardList} cardId={cardId} displayForm={handleShowCommentForm}/>
      )}
    </>
  )
}

export default CardList;
