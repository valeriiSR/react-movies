import React, {Component} from 'react';

import { Preloader } from './Preloader';
import { Cards } from './Cards';
import { Search } from './Search';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '608a32c4';

class Content extends Component{
  state = {
    movies: [],
    loading: true,
  }

  searchMovies = (str, type='all') => {
    this.setState({ loading: true })
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' 
        ? `&type=${type}`
        : ''}`, {
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        })
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
      })
  }

  componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=1`, {
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
      })
  }
  
  render(){
    const { movies, loading } = this.state;
    return (
      <div className="container main-content">
      <Search searchMovies={this.searchMovies} />
        <div className="row main-content__wrapper">
          { loading ? (
            <Preloader />
          ) : (
            <Cards movies={movies} />
          )}
          
        </div>
      </div>
    )
  }
}

export { Content };
