
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/page/Home';
import Login from './Component/login/Login';
import Chitiet from "./Component/MovieDetail/MovieDetail"
import HomeAdmin from './Component/page/HomeAdmin';
import Add from "./Component/page/Add"
import Edit from './Component/page/Edit';
function App () {
  
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      /////trang dành cho người dùng
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/chitietphim/:id_Movie' element={<Chitiet/>}/>

        <Route exact path='/home' element={<HomeAdmin/>}/>
        <Route  path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
  
}

export default App;
