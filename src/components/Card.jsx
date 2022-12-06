function Card(props){
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-image">
            <img src={ poster } />
          </div>
          <div className="card-content">
          <span className="card-title">{ title }</span>
            <p>{ year } <span className="right">{ type }</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Card };