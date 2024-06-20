import React, { useState } from React;
import './CreateBoard.css'

function CreateBoard() {
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div>
      <button onClick={handleDisplayForm}>Create Board</button>
      {displayForm && <CreateForm displayForm={handleDisplayForm} />}
    </div>
  );
}

export default CreateBoard;
