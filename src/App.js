import React, { useEffect, useState } from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import netflixLoading from './images/Netflix_LoadTime.gif';
import './App.css';

const App = () => {
  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      const choosen = originals[0].itens.results[randomChosen];
      const choosenInfo = await tmdb.getMovieInfo(choosen.id, 'tv');
      setFeaturedData(choosenInfo);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData && 
      <FeaturedMovie item={ featuredData }/>        
      }
      <section className="lists">
        { movielist.map((item, key)=> (
          <MovieRow
            key={ key }
            title={ item.title }
            itens={ item.itens }
          />
        ))}
      </section>
      <footer>
        Direitos de imagem para Netflix<br/>
        Dados extraidos do site Themoviedb.org
      </footer>
      { movielist.length <= 0 && 
      <div id="loading">
        <img src={netflixLoading} alt="loading" />
      </div>}
    </div>
  )
}

export default App;