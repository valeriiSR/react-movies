function Footer(){
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Movies project</h5>
            <p className="grey-text text-lighten-4">Based on Matirializecss and React</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © { new Date().getFullYear() } Copyright
        <a className="grey-text text-lighten-4 right" href="#!">More</a>
        </div>
    </div>
  </footer>
  )
}

export { Footer };