import { Link, NavLink } from 'react-router-dom';
function Contact() {
  return <div> <h1>Contact the Page</h1>

    <Link to="/about">About</Link>
    <NavLink
      to="/contact"
      className={({ isActive }) => isActive ? "active" : ""}>
      Contact
    </NavLink>
    <Link to="/">Home</Link>
  </div>;
}
export default Contact;