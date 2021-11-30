import React, { useState } from 'react'

export default function Navbar(props) {
    const {handleAddMovies} = props;

    const [inputVal, setInputVal] = useState(" ")
    // console.log("Input Value", searchVal);
    
    const [seachData, setSeachData] = useState(null)
    // console.log(seachData);
    
    const onSeachClick = async()=>{
        if(inputVal.length > 1 ){
            const res = await fetch(`http://omdbapi.com/?t=${inputVal}&apikey=891a9115`);
            const data =await res.json();
            setSeachData(data);
        } else{
            alert("Can't search empty input ")
        }

    }

    const addToMoviesClick = ()=>{
        handleAddMovies(seachData);
        setSeachData(null);
    }


    return (
        <>
            <div className="nav">
                <div className="search-container ">
                    <input onChange={(e)=>setInputVal(e.target.value)} placeholder="Enter movie name"/>
                    <button onClick={onSeachClick} id="search-btn">Search</button>
                </div>
            </div>

            {seachData && 
            
            <div className="movie-card ">
                <div className="left">
                    <img src={seachData.Poster} alt="movie-poster" />
                </div>

                <div className="right">
                    <div className="title">{seachData.Title}</div>
                    <div className="plot">{seachData.Plot}</div>

                    <div className="footer">
                        <div >
                            <button className="add-to-movies movie-info button" onClick={addToMoviesClick} > Add to movies </button>
                        </div>
                    </div>
                </div>
            </div>


            } 
        </>
    )
}
