import React, { useState } from 'react';
import './MovieRow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const MovieRow = ({ title, itens }) => {
  const [marginLeft, changeMarginLeft] = useState(0);
  const leftClick = () => {
    let x = marginLeft + (window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    changeMarginLeft(x);
  }
  const rightClick = () => {
    let x = marginLeft - (window.innerWidth / 2)
    if (x < window.innerWidth - (length * 150)){
      x = window.innerWidth - (length*150) - 60;
    }
    changeMarginLeft(x);
  }
  const { length } = itens.results;
  return (
    <div className="movieRow">
      <h2>{ title }</h2>
      <div className="movieRow--left" onClick={leftClick}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--right" onClick={rightClick}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{marginLeft, width: length*150}}>
          {itens.results.map((item, key) =>(
            <div className="movieRow--item" key= { key }> 
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="movie poster" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow;
