import React, {Component} from 'react';

class Search extends Component{
  state = {
    search: '',
    type: 'all',
  }

  handleSerach = (event) => {
    if(event.key === 'Enter'){
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }
  handlerFilter = (e) => {
    console.log(e.target.value);
    this.setState(() => ({ type: e.target.value }), 
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      });
  }

  render(){
    return (
      <div className='row'>
        <div className='input-field col s12'>
          <input 
            id='search' 
            name='search'
            type='search'
            className='validate'
            value={this.state.search}
            placeholder='search'
            onChange={ (e) => this.setState({ search: e.target.value }) }
            onKeyDown={this.handleSerach}
          />
          <button className='btn search-btn' onClick={() => { this.props.searchMovies(this.state.search, this.state.type) }}>Search</button>
        </div>
        <div className='radio-group'>
          <p>
            <label>
              <input 
                name='movie-type'
                className="with-gap"
                checked={this.state.type === 'all'} 
                type='radio' 
                value='all'
                onChange={this.handlerFilter}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input 
                name='movie-type'
                className="with-gap"
                checked={this.state.type === 'movie'} 
                type='radio' 
                value='movie'
                onChange={this.handlerFilter}
                />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input 
                name='movie-type'
                className="with-gap"
                checked={this.state.type === 'series'} 
                type='radio' 
                value='series'
                onChange={this.handlerFilter}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    )
  }
}

export { Search };