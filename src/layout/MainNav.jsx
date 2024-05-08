import { NavLink } from 'react-router-dom';
function MainNav(){
    return(
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
    )
  
  
  }

  export default MainNav;