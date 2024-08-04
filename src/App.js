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
import { PlayShow } from './netflix/PlayShow';
import { FormDemo1 } from './forms/FormDemo1';
import { FormDemo2 } from './forms/FormDemo2';
import { FormDemo3 } from './forms/FormDemo3';
import { FormDemo4 } from './forms/FormDemo4';
import { ApiDemo1 } from './api/ApiDemo1';
import { UseEffectDemo } from './components/UseEffectDemo';
import { ApiDemo2 } from './components/ApiDemo2';
import { UpdateUser } from './api/UpdateUser';

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
        <Route path = "/netflixshows/play/:id" element = {<PlayShow/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
        <Route path='/formdemo2' element = {<FormDemo2/>}></Route>
        <Route path='/formdemo3' element = {<FormDemo4/>}></Route>
        <Route path='/apidemo1' element = {<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element = {<ApiDemo2/>}></Route>
        <Route path='/useEffectdemo' element = {<UseEffectDemo/>}></Route>
        <Route path = "/updateuser/:id" element = {<UpdateUser/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
