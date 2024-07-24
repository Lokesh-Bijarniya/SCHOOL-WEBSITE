import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav>
      <ul className="flex justify-around">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about-us" className="hover:text-gray-400">About Us</Link></li>
        <li><Link to="/academics" className="hover:text-gray-400">Academics</Link></li>
        <li><Link to="/admissions" className="hover:text-gray-400">Admissions</Link></li>
        <li><Link to="/faculty" className="hover:text-gray-400">Faculty</Link></li>
        <li><Link to="/students" className="hover:text-gray-400">Students</Link></li>
        <li><Link to="/gallery" className="hover:text-gray-400">Gallery</Link></li>
        <li><Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
