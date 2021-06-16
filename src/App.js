import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "🎂": "Birthday",
  "🛍️": "Black Friday",
  "✊🏿": "Black Lives Matter",
  "🐉": "Chinese New Year",
  "🎅": " Christmas",
  "🦠 ": "Coronavirus",
  "🪔": " Diwali",
  "🌱": "Earth Day",
  " 🐰": "Easter"
};
export default function App() {
  var emojiweKnow = Object.keys(emojiDictionary);

  var [meaning, setmeaning] = useState("");

  function clickemojiHandler(emoji) {
    setmeaning(emojiDictionary[emoji]);
  }

  function emojiInputhandler(event) {
    var boxInput = event.target.value;
    var meaning = emojiDictionary[boxInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>

      <input onChange={emojiInputhandler}></input>
      <h2>{meaning}</h2>
      <h3>Emoji we know</h3>
      {emojiweKnow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => clickemojiHandler(emoji)}
          >
            {emoji}
            {"  "}
          </span>
        );
      })}

      {/* {userInput} */}
    </div>
  );
}
