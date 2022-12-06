import { Card } from './Card';

function Cards(props){
  const { movies = [] } = props;
  return (
    <div className='movies'>
      {/* {movies.map(movie => {
        return <Card key={movie.imdbID} {...movie} />
      })} */}
      {movies.length 
        ? movies.map(movie => (<Card key={movie.imdbID} {...movie} />)) 
        : <h4>Nothing found</h4>}
    </div>
  )
}
export { Cards };