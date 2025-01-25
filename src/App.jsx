import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Version from './components/Version';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/versions' element={<Version/>}/>
    </Routes>
    </>
  );
}

export default App;
