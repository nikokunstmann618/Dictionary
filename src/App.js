import React, { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import "./styles.css";

export default App = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState("");
  const [changedWord, setChangedWord] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setChangedWord(word);
    }, 500);

    return () => clearTimeout(timer);
  }, [word]);

  useEffect(() => {
    const fetchDefinition = async () => {
      if (!changedWord.trim()) {
        setDefinition("");
        setError("");
        return;
      }

      setError("");
      setDefinition("");
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
            changedWord.trim()
          )}`
        );

        if (!response.ok) {
          throw new Error("Word not found");
        }

        const data = await response.json();
        setDefinition(data[0].meanings[0].definitions[0].definition);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDefinition();
  }, [changedWord]);

  return (
    <div className="app">
      <Title />
      <Entry word={word} setWord={setWord} />
      <Info definition={definition} error={error} />
      <div className="image-container">
        <img
          src="https://wallpapers.com/images/hd/dictionary-book-with-open-pages-yg3mrlu333nr9jh6.jpg"
          alt="Dictionary Book"
        />
        <img
          src="https://wallpaperaccess.com/full/5680385.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};
