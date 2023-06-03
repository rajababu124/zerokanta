import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg" >
<div className="container">
<a className="navbar-brand" href="/"> Zero <RxCross1 color="dodgerblue" /></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/playagain">Play-Again</a>
      </li>
    </ul>
  </div>
</div>
</nav>
    </>
  )
}

export default Navbar
