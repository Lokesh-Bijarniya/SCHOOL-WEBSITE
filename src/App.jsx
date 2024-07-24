import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

const App = () => (
  <>
    <Header />
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/academics" element={<Academics/>} />
        <Route path="/admissions" element={<Admissions/>} />
        <Route path="/faculty" element={<Faculty/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
