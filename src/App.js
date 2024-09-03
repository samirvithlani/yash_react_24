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
import { ApiDemo3 } from './api/ApiDemo3';
import { useEffect } from 'react';
import { Products } from './components/products/Products';
import { AppContext } from './appContext';
import { QueryDemo1 } from './QueryDemo/QueryDemo1';
import { QueryDemo2 } from './QueryDemo/QueryDemo2';
import { ProductComponent } from './prod/ProductComponent';
import { BankComponent } from './components/bank/BankComponent';
import { CounterComponent } from './CounterComponent';

function App() {

 
  var title = "React App"

  useEffect(() => {
    
    localStorage.setItem("token","87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5")
    
  }, [])
  


  return (
    <div className="App">
      <Navbar/>
      <AppContext.Provider value={{title}}>
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
        <Route path='/apidemo2' element = {<ApiDemo2/>}></Route>
        <Route path='/apidemo3' element = {<ApiDemo3/>}></Route>
        <Route path='/useEffectdemo' element = {<UseEffectDemo/>}></Route>
        <Route path = "/updateuser/:id" element = {<UpdateUser/>}></Route>
        <Route path ="/products" element = {<Products/>}></Route>
        <Route path='/querydemo1' element = {<QueryDemo1/>}></Route>
        <Route path='/querydemo2' element = {<QueryDemo2/>}></Route>
        <Route path='/prodcomp' element = {<ProductComponent/>}></Route>
        <Route path='/bankcomp' element ={<BankComponent/>}></Route>
        <Route path = "/countercomp" element = {<CounterComponent/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
