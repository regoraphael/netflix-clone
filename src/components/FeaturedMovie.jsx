import React from 'react';
import './FeaturedMovie.css';
import PropTypes, { array } from 'prop-types';

const FeaturedMovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  item.genres.forEach((genre) => {
    genres.push(genre.name);
  });

  let description = item.overview;
  if (description.length > 200) {
    description = `${description.substring(0, 200)}...`;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{ item.original_name }</div>
          <div className="featured--info">
            <div className="featured--points">
              {`${item.vote_average} ` }
              pontos
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {`${item.number_of_seasons} `}
              temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured--description">{ description }</div>
          <div className="featured--buttons">
            <button type="button" className="featured--watchbutton">▶ Assistir</button>
            <button type="button" className="featured--mylistbutton">+ Minha Lista</button>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong>
            { genres.join(', ') }
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturedMovie.propTypes = {
  item: PropTypes.objectOf(array),
}.isRequired;

export default FeaturedMovie;
