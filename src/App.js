import logo from './logo.svg';
//link
import './App.css';
import { Header } from './components/Header';
import Content from './components/Content';
import { MapDemo } from './components/MapDemo';
import { Users } from './components/users/Users';
import { UseStateDemo } from './components/UseStateDemo';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './netflix/NetflixHome';
import { NetflixShows } from './netflix/NetflixShows';
import { Navbar } from './components/Navbar';
import { Error404 } from './components/Error404';
import { WishList } from './netflix/WishList';

function App() {

 
  var title = "React App"


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<NetflixHome/>}></Route>
        <Route path='/netflixhome' element ={<NetflixHome/>} ></Route>
        <Route path='/netflixshows' element ={<NetflixShows/>}></Route>
        <Route path = "/netflixhome/wishlist" element = {<WishList/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
