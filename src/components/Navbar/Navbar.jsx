import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaMusic, FaSearch } from "react-icons/fa";
// import custom hook


import './Navbar.css'

const Navbar = ({
  libraryStatus,
  setLibraryStatus,
  searchItem = "raftaar",
  setSearchItem,
  setSongs,
  songs,
  setCurrentSong

}) => {
  // useState
  const [buttonText, setButtonText] = useState(false);
  const handleSearch = async (searchItem)=>{
    if(searchItem.length===0){
      setSearchItem("");
      return;
    }
    setSearchItem(searchItem);
    setTimeout(() => {
      
    }, 1000);
    console.log(searchItem);
    // const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchItem}`;
        const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '233432f4e9msh528f4f0c795577ep194780jsnc0bb93c953e3',
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
    let info=songs;
    try {
      const response = await fetch(url, options);
      const result = await (response.json());
      info=result.data;
      console.log(info)
    } catch (error) {
      info=songs;
      console.error(error);
    }
    let newSongList=[];
    for(let i=0;i<info?.length;i++){
      let obj={
        id: uuidv4(),
            name: "Faded",
            // artist: searchItem,
            cover:  "/image/faded.jpg",
            audio:   "/music/faded.mp3",
            active: false,
            color: ['#C4B54E','#DEDFB7']
      }
      for(let key in info[i]){
          if(key==="preview"){
              obj.audio=info[i][key];
          }
          if(key==="album"){
              for(let k in info[i][key]){
                  if(k==="title") obj.name=info[i][key][k];
                  if(k==="cover_xl") obj.cover=info[i][key][k];
              }
          }
      }
      newSongList.push(obj);
    }
    if(newSongList.length===0) newSongList=songs;
    setSongs(newSongList);
    setCurrentSong(newSongList[0]);
  }
  

  const libraryButtonClickHandler = () => {
    setLibraryStatus(!libraryStatus);
    setButtonText(!buttonText);
  };

 
  
  return (
    <div className="app-navbar flex justify-between align-middle">
      <div className="app-navbar-logo">
        <h1>Player</h1>
      </div>

      <div >
          <input
            type="text"
            className=" searchBar p-2 outline-none border border-solid rounded-lg border-black"
            placeholder="Search Artist Name"
            value={searchItem}
            onChange={(e)=> handleSearch(e.target.value)}
          />
      </div>
      <div>
        <button className="button flex" onClick={libraryButtonClickHandler}>
          {buttonText ? "Close" : "Library"} <FaMusic />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
