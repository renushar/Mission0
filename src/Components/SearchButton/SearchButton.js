import React from 'react';
import '../SearchButton/SearchButton.css';


function SearchButton() {
  return (
    <div className= " search-main"  >
      <h1 className="text">Relax! Life is Beautiful!</h1>

      <img src={"view.png"} alt=""></img>

      <form  className="flex-container">
        <input className ='flex-item-left' type="text" placeholder="Search.." />

        <button  className ='flex-item-right' type="submit"> SEARCH</button>
      </form>
    </div>
  );
}

export default SearchButton;
