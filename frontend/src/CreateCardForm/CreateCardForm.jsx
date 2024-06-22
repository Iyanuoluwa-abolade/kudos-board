// import React, { useState, useEffect } from "react";
// import "./CreateCardForm.css";
// import {useParams} from "react-router-dom"

// function CreateCardForm(props) {
// //   const [boards, setBoards] = useState([]);
//   // const [cards, setCards] = useState([]);
//   // const [showBoards, setShowBoards] = useState(false);
//   // const [showModal, setShowModal] = useState(false); // new state variable

//   async function addCard(Create Card) {
//     try {
//       const response = await fetch("http://localhost:3000/boards", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, category, author }),
//       });
//       const data = await response.json();
//       setBoards([...boards, data]);
//       // setShowBoards(true);
//       props.refreshBoards()
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
// export CreateCardForm;



// import React, { useState } from 'react';
// import './CreateCardForm.css';
// import { useParams } from 'react-router-dom';

// function CreateCardForm(props) {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [gifUrl, setGifUrl] = useState('');
//     const [owner, setOwner] = useState('');
//     const { boardId } = useParams();

//     async function addCard(event) {
//         event.preventDefault();
//         try {
//             const response = await fetch(`http://localhost:3000/boards/${boardId}/cards`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ title, description, gifUrl, owner }),
//             });
//             const data = await response.json();
//             props.refreshBoards();
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <div className="create-card-form">
//             <h2>Create a New Card</h2>
//             <form onSubmit={addCard}>
//                 <input
//                     type="text"
//                     placeholder="Enter card title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter card description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Search GIFs..."
//                     onBlur={searchGIFs}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter GIF URL"
//                     value={gifUrl}
//                     onChange={(e) => setGifUrl(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter owner (optional)"
//                     value={owner}
//                     onChange={(e) => setOwner(e.target.value)}
//                 />
//                 <button type="submit">Create Card</button>
//             </form>
//         </div>
//     );
// }

// async function searchGIFs(event) {
//     const query = event.target.value;
//     if (!query) return;
//     try {
//         const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_GIPHY_API_KEY&q=${query}&limit=1`);
//         const data = await response.json();
//         if (data.data.length > 0) {
//             setGifUrl(data.data[0].images.original.url);
//         } else {
//             alert('No GIFs found.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// export default CreateCardForm;
