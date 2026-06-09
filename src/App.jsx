import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/services' element = {<Services/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
      </Routes>
    <Sidebar/>

    </>
  )
}

export default App
