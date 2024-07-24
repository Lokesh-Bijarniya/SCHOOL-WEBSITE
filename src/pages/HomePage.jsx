import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Events from '../components/Events';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen">
    <div className="text-center p-8 bg-black text-white flex-1">
      <img src="https://th.bing.com/th/id/OIP.5SR_ueuEBm_n77ryvoDVkwHaEn?w=278&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="School Logo" className="mx-auto mt-4 mb-4 w-32" />
      <h1 className="text-4xl font-bold">Innovation School Of Technology</h1>
      <p className="text-xl py-6">Welcome to our school! We are committed to providing quality education and nurturing our students to become future leaders.</p>
    </div>
    <div className="bg-blue-100 flex flex-col justify-center h-['840px'] p-12">
    <h1 className="text-4xl text-center font-semibold">Something About Us</h1>
    <div className="flex p-6">
      <img src="https://th.bing.com/th/id/OIP.2QscluJYIuoBQJfS_stRDgHaE7?w=256&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Campus" className="rounded-xl"/>
      <p className="p-12 font-mono">The Innovation School of Technology (IST) is a forward-thinking educational institution dedicated to nurturing the next generation of tech pioneers and innovators. Established in 2024, IST is focused on delivering a cutting-edge curriculum that combines theoretical knowledge with practical experience, equipping students with the skills necessary to thrive in an ever-evolving technological landscape. Our mission is to inspire creativity, foster critical thinking, and promote collaboration among students, preparing them to tackle real-world challenges with innovative solutions.<br/>
      <button className="mt-6 bg-green-300 rounded-full p-2 hover:bg-green-500">
        <Link to='/about-us'>
           Read More <ExpandMoreIcon/>
        </Link>
      </button>
      </p>
    </div>
    
    </div>



    <div className="mt-8">
      <Events />
    </div>


    <div className="mt-8 p-10 bg-gray-200">
      <h2 className="text-2xl font-semibold">Quick Links</h2>
      <ul className="list-disc list-inside mt-4">
        <li><a href="/about-us" className="text-blue-500 hover:underline">About Us</a></li>
        <li><a href="/academics" className="text-blue-500 hover:underline">Academics</a></li>
        <li><a href="/admissions" className="text-blue-500 hover:underline">Admissions</a></li>
        <li><a href="/faculty" className="text-blue-500 hover:underline">Faculty</a></li>
        <li><a href="/students" className="text-blue-500 hover:underline">Students</a></li>
        <li><a href="/gallery" className="text-blue-500 hover:underline">Gallery</a></li>
        <li><a href="/contact-us" className="text-blue-500 hover:underline">Contact Us</a></li>
      </ul>
    </div>
  </div>
);

export default Home;
