import React from "react";
import Board from "./Board";
import "./tictactoe.css";

function TicTacToe() {
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
