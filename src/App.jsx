
import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <>
      <Navbar/>
    
      <Outlet></Outlet>
      

    </>

  );
}

export default App;
