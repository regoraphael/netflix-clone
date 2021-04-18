const API_KEY = 'api_key=b23f84f9f796ea9c6cc366fdd07589ae';
const API_BASE = 'https://api.themoviedb.org/3';
const API_LANGUAGE = "language=pt-BR"

const basicFetch = async (endpoit) => {
  const req = await fetch(`${API_BASE}${endpoit}${API_LANGUAGE}&${API_KEY}`);
  const json = await req.json();
  return json;
}

const data = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title:'Originais do Netflix',
        itens: await basicFetch(`/discover/tv?with_network=213$`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        itens:  await basicFetch('/trending/all/week?'),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        itens:  await basicFetch('/movie/top_rated?')
      },
      {
        slug: 'action',
        title: 'Ação',
        itens:  await basicFetch('/discover/movie?with_genres=28&')
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens:  await basicFetch('/discover/movie?with_genres=35&')
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens:  await basicFetch('/discover/movie?with_genres=27&')
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens:  await basicFetch('/discover/movie?with_genres=10749&')
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        itens:  await basicFetch('/discover/movie?with_genres=99&')
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if(movieId) {
      if(type === 'movie') {
        info = await basicFetch(`/movie/${movieId}?`);
      } else if (type === 'tv') {
        info = await basicFetch(`/tv/${movieId}?`);
      }
    }
    return info;
  }
}

export default data;
