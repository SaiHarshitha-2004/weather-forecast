import React, { useState } from "react";

const Inputs = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim() !== "") {
      setQuery({ q: input });
      setInput("");  
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search..."  // Static placeholder
          value={input}  // Value tied to the input state
          onChange={handleInputChange} 
          onKeyDown={handleKeyDown}
          className="text-xl w-full font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
      </div>

      <div className="flex flex-row items-center justify-center">
        <p className="text-xl text-white mx-2">In °C</p>
      </div>
    </div>
  );
};

export default Inputs;
