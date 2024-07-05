import logo from './logo.svg';
//link
import './App.css';
import { Header } from './components/Header';
import Content from './components/Content';
import { MapDemo } from './components/MapDemo';
import { Users } from './components/users/Users';

function App() {

 
  var title = "React App"


  return (
    <div className="App">
      <Users title = {title}/>
      {/* <MapDemo/> */}
      {/* <Header></Header>
      <Content></Content> */}
    
    </div>
  );
}

export default App;
