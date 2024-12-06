import React from "react";

export default Info = ({ definition, error }) => {
  return (
    <div className="info">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <h2>Definition:</h2>
          <p>{definition || "Type a word and hit search!"}</p>
        </>
      )}
    </div>
  );
};
