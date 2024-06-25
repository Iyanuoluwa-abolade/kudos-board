import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateForm from "../CreateForm/CreateForm";
import CardList from "../CardList/CardList";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from "../Home/Home";

function App() {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [boards, setBoards] = useState([]);
  const [boardId, setBoardId] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] =useState("all")
  const [filteredBoards, setFilteredBoards] = useState([])
  const [userId, setUserId] = useState(null)
  const categories = ["all", "recent", "celebration", "thank you", "inspiration" ];

  useEffect(() => {
    receiveBoardList();

  }, [userId])

  async function receiveBoardList(){
    try{
      const url = userId
      ? `${import.meta.env.VITE_BACKEND_URL}/boards/user/${userId}`
      : `${import.meta.env.VITE_BACKEND_URL}/boards`
      const response = await fetch(url, {
        method: 'GET',
          headers: {
            'content-Type': 'application/json'
          }
      })
      const data = await response.json();
      setBoards(data)

    } catch(err) {
      console.log(err)
    }
  }
  async function handleSearchBoards(query) {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/boards/search/${query}`)
      const data = await response.json()
      setBoards(data)
    } catch(err){

    }
  }

  async function deleteBoard(boardId){
    console.log("cl")
    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/boards/${boardId}`, {
        method: 'DELETE',
        headers: {
          'content-Type': 'application/json'
        },
      });
      if (response.ok){
        console.log("response is ok")
        receiveBoardList();
      }
    } catch(err) {
      console.log(err)
    }
  }

  function handleSearchChange(query){
    setSearchQuery(query);
    if (query.length > 0) {
      handleSearchBoards(searchQuery)
    } else {
      receiveBoardList()
    }
  }

  function handleFilterBoardsCategory(){
    console.log({filter})
    if (filter === "all") {
      setFilteredBoards(boards)
    } else if (filter === "recent") {
      const sortedBoards = boards.sort((a,b) => b.id -a.id);
      const lastThreeBoards = sortedBoards.slice(0,3)
      setFilteredBoards(lastThreeBoards)
    } else if (filter === "my-boards") {
      setFilteredBoards(boards.filter(board => board.userId === userId))
    }
    else {

      const filtered = boards.filter(board => board.category === filter);

      setFilteredBoards(filtered)
    }

  }

  useEffect(() => {
    handleFilterBoardsCategory();
  }, [filter, boards])

  function handleFilterChange(category) {
    setFilter(category)
  }


  function handleSetBoardId(id) {
    setBoardId(id);
  }

  function handleDisplayCreateForm() {
    console.log("click")
    setDisplayCreateForm(!displayCreateForm);
  }

  console.log("filteredBoards", filteredBoards)


  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home
                    searchQuery={searchQuery}
                    handleSearchChange={handleSearchChange}
                    categories={categories}
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                    boards={filteredBoards}
                    handleDisplayCreateForm={handleDisplayCreateForm}
                    deleteBoard={deleteBoard}
                    handleSetBoardId={handleSetBoardId}
                  />
                  {displayCreateForm && (
                    <CreateForm
                      displayForm={handleDisplayCreateForm}
                      refreshBoards={receiveBoardList}
                      formName={"board"}
                    />
                  )}
                </>
              }
            />
            <Route
              path="/boards/:id/cards"
              element={<CardList boardId={boardId} displayForm={handleDisplayCreateForm} />}
            />
          </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
