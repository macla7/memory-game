import React, { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import images from "../misc/images";
import shuffle from "../misc/shuffle";
import Scoreboard from "./Scoreboard";

function GameContainer() {
  const [cards, setCards] = useState(shuffle(images));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function onClick(id) {
    setCards(
      cards.map((card) => {
        if (card.id === id && card.clicked === true) {
          console.log("beep");
          restart();
        } else if (card.id === id) {
          console.log("boop");
          setScore(score + 1);
          card.clicked = true;
        }

        return card;
      })
    );
  }

  function win() {
    if (score === 16) {
      alert("You've won eh! Congrats 🥳");
      restart();
    }
  }

  function restart() {
    if (score > highScore) {
      setHighScore(score);
    }
    resetCards();
    setScore(0);
  }

  function resetCards() {
    setCards(
      cards.map((card) => {
        card.clicked = false;

        return card;
      })
    );
  }

  useEffect(() => {
    setCards(shuffle(cards));
  }, [cards]);

  useEffect(() => {
    win();
  });

  return (
    <div>
      <div>
        <header>
          <div>
            <h1>The Lord of the Memories</h1>
            <h2>
              Please select a character, but don't select the same one twice!
            </h2>
          </div>
          <Scoreboard score={score} highScore={highScore} />
        </header>
      </div>
      <div className="cardCont">
        {cards.map((img) => {
          return (
            <Card
              src={img.url}
              name={img.name}
              id={img.id}
              handleClick={onClick}
              key={uniqid()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GameContainer;
