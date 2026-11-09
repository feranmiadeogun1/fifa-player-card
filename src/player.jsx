import React from "react";

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  rating,
  image,
}) {
  return (
    <div className="fifa-card">
      <div className="fifa-header">
        <span>FIFA ULTIMATE TEAM</span>
        <span className="edition">LEGEND EDITION</span>
      </div>

      <div className="player-rating">
        <div className="rating-number">{rating}</div>
        <div className="rating-label">OVR</div>
        <div className="rating-star">★</div>
      </div>

      <div className="player-image-container">
        <img
          src={image}
          alt={name}
          className="player-image"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/300x350?text=Player";
          }}
        />
      </div>

      <div className="player-info">
        <h2>{name}</h2>
        <div className="player-position">SUPERSTAR</div>

        <div className="player-details">
          <div>
            <span>TEAM</span>
            <strong>{team}</strong>
          </div>

          <div>
            <span>NATIONALITY</span>
            <strong>{nationality}</strong>
          </div>

          <div>
            <span>JERSEY</span>
            <strong>#{jerseyNumber}</strong>
          </div>

          <div>
            <span>AGE</span>
            <strong>{age}</strong>
          </div>
        </div>
      </div>

      <div className="fifa-footer">
        <span>★</span> ELITE PLAYER <span>★</span>
      </div>
    </div>
  );
}

export default Player;