
import { Outlet } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      

    </>

  );
}

export default App;
