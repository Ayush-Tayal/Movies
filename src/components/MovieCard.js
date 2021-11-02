import React, { useState } from "react";

export default function MovieCard(props) {
    const {movie, addFavFunc} = props;

  return (
    <div className="movie-card">
      <div className="left">
        <img src={movie.Poster} alt="movie-poster" />
      </div>

      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>

        <div className="footer">
          <div className="infos">{movie.imdbRating}</div>
          <div className="infos">{movie.Released}</div>
          <div className="infos">{movie.Language}</div>
          <div className="infos">{movie.Country}</div>

          <div className="favourite">
            <button className="favourite-btn" onClick={()=>{addFavFunc(movie)}} > Favourite </button>
            <button className="unfavourite-btn" onClick={()=>{addFavFunc(movie)}} style={{display:"none"}}> Unfavourite </button>

          </div>
        </div>

      </div>
    </div>
  );
}
