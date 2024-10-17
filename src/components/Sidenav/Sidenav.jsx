import "./Sidenav.css"
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { FaHome, FaHeart, FaList } from 'react-icons/fa';

const Sidenav = () => {
  const handleKeyUp = (event) => {
    console.log(event.key);
    
    if (event.key === 'Enter') {
      window.location.href = `/search?query=${event.target.value}`;
    }
  };

  return (
    <div className="side_container">
      <div className="title">
        {/* <RiMovie2Fill className="icon" /> */}
        <h1>MovieList</h1>
      </div>
      <div className="search">
        <CiSearch className="icon" />
        <input type="text" placeholder="Search" onKeyUp={handleKeyUp} />
      </div>
      <div className="menu">
        <NavLink to="/" className="menu-item" activeclassname="active">
          <FaHome className="icon" />
          <span>Homepage</span>
        </NavLink>
        <NavLink to="/favourites" className="menu-item" activeclassname="active">
          <FaHeart className="icon" />
          <span>Favourites</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidenav
