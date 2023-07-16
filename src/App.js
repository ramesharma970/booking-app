import { Routes, Route, Outlet, Link } from 'react-router-dom';

//components
import Home from './components/home/Home';
import { About } from './components/about/About';
import Booknow from './components/booknow/Booknow';
import Signup from './components/signup/Signup';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="book-now" element={<Booknow />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
