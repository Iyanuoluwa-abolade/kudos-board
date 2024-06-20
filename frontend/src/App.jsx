import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
import BoardList from "./BoardList/BoardList";
import Footer from "./Footer/Footer";
import CreateForm from "./CreateForm/CreateForm";
import CardList from "./CardList/CardList";
// import PhotoCard from "./PhotoCard"';

function App() {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [displayBoardPage, setDisplayBoardPage] = useState(false);
  const [boards, setboards] = useState([]);


  function handleDisplayBoardPage() {
    setDisplayBoardPage(!displayBoardPage);
  }

  function handleDisplayCreateForm() {
    setDisplayCreateForm(!displayCreateForm);
  }

  return (
    // {!displayBoardPage ? <BoardPage handleDisplayBoardPage={handleDisplayBoardPage}/> : null}

    <div className="App">
      {!displayBoardPage ? (
        <>
          {displayCreateForm ? (
            <CreateForm displayForm={handleDisplayCreateForm} />
          ) : null}

          <Header />

          <main>
            <SearchBar />
            <div className="buttons">
              <Button name="All" />
              <Button name="Recent" />
              <Button name="Celebration" />
              <Button name="Thank You" />
              <Button name="Inspiration" />
            </div>

            <div className="create-buttons">
              <Button
                name="Create New Board"
                displayForm={handleDisplayCreateForm}
              />
            </div>
            <BoardList handleDisplayBoardPage={handleDisplayBoardPage}
            boards = {boards} />
          </main>

          <Footer />
        </>
      ) : (
        <CardList handleDisplayBoardPage={handleDisplayBoardPage}
        // boards={boards}
       />
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
