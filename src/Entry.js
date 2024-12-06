import React from "react";

export default Entry = ({ word, setWord }) => {
  return (
    <div className="entry">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
    </div>
  );
};
