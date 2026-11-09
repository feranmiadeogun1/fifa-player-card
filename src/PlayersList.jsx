import React from "react";
import Player from "./Player";
import players from "./players";

function PlayersList() {
  return (
    <div className="fifa-container">
      <header className="page-header">
        <p className="subtitle">ULTIMATE TEAM COLLECTION</p>
        <h1>FIFA PLAYER CARDS</h1>
        <p>Discover football's greatest superstars</p>
      </header>

      <div className="players-grid">
        {players.map((player) => (
          <Player
            key={player.name}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            rating={player.rating}
            image={player.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayersList;