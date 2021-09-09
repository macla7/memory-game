import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboardCont">
      <div className="scoreboard">
        <div className="score">
          <p>
            Score: <span>{props.score}</span>
          </p>
          <p>
            High Score: <span>{props.highScore}</span>
          </p>
        </div>
        <img src={"./images/ring.png"} alt="ring" />
      </div>
    </div>
  );
}

export default Scoreboard;
