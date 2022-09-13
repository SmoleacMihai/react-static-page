const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={require("../images/react-logo.png")} className="react-logo"/>
        <h2 className="logo-title">ReactFacts</h2>
      </div>
      <h2 className="additional-title">React Course - Project 1</h2>
    </nav>
  )
}

export default Navbar;