import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import OnlineFriends from "./OnlineFriends/OnlineFriends";

const Navbar = (props) => {
  // debugger;
  return (
    <nav className={c.nav}>
      <NavLink exact className={c.nav__item} activeClassName={c._active} to="/">Profile</NavLink>
      <NavLink className={c.nav__item} activeClassName={c._active} to="/dialogs">Messages</NavLink>
      <NavLink className={c.nav__item} activeClassName={c._active} to="/news">News</NavLink>
      <NavLink className={c.nav__item} activeClassName={c._active} to="/music">Music</NavLink>
      <NavLink className={c.nav__item} activeClassName={c._active} to="/settings">Settings</NavLink>

      {/*<OnlineFriends onlineFriends={props.stateSidebar} />*/}
    </nav>
  );
};

export default Navbar;