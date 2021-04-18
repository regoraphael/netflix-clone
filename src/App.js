import tmdb from './tmdb';
import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import './App.css'

const App = () => {
  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
      
      let originals = list.filter((item) => item.slug === 'originals' );
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let choosen = originals[0].itens.results[randomChosen];
      let choosenInfo = await tmdb.getMovieInfo(choosen.id, 'tv');
      setFeaturedData(choosenInfo);
    }
    loadAll();
  }, []
  );

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
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
    </div>
  )
}

export default App;