import React, { useState } from "react";

function EnableOnInputChange() {
  const [text, enableButton] = useState("");

  const handleTextChange = (event) => {
    enableButton(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            text: ${text} \n 
            You can replace this alert with your process`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter Text</label>
        <input
          type="text"
          name="text"
          placeholder="Enter Text"
          onChange={handleTextChange}
          value={text}
        />
      </div>
      
      <button type="submit" disabled={!text}>
        Enable
      </button>
    </form>
  );
}

export default EnableOnInputChange