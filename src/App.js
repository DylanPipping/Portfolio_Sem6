import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </>
  );
}

export default App;
