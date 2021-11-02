import { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
  const [movieData, setMovieData] = useState(data);
  const [favMovie, setFavMovie] = useState([]);
  const [flag, setFlag] = useState(true);

  const showTag = flag ? movieData:favMovie;

  const addFavFunc = (movie)=>{
    setFavMovie([movie, ...favMovie])
    // setFavMovie((prevState)=>[...prevState, movie]);
    showAlert("Success:","Movie added to the fav list" );
  };
  // console.log("All fav movies", favMovie);
  
  const handleMoviesClick=()=>{
    setFlag(true);
    showAlert("Success:","Movies Tab Opened" );
  }

  const handleFavClick = ()=>{
    setFlag(false);
    showAlert("Success:","Favourites Tab Opened" );
  }

  // Alerts
  
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1200)
  }

  //
  return (
    <>
      <Navbar />
      
      <Alerts alert={alert}/>


      <div className="main">
        <div className="tabs">
          <div> <button className= {`tab ${flag ? "active-tabs" : ""}`} onClick={handleMoviesClick}> Movies </button></div>
          <div> <button className= {`tab ${!flag ? "active-tabs" : ""}`} onClick={handleFavClick}> Favourites Movies </button></div>
        </div>
      </div>

      <div className="list">
        {showTag.map((movie, key) => (
          <MovieCard key={key} movie={movie} addFavFunc={addFavFunc} />
        ))}
      </div>
    </>
  );
}

export default App;
