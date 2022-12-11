function Header() {
  return (
    <nav className="nav-extended teal">
      <div className="nav-wrapper nav-wrapper__header container">
        <a href="!#" className="brand-logo">Movies shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/valeriiSR/react-movies">GitHub</a></li>
        </ul>
      </div>
    </nav>
  )
}
export { Header };