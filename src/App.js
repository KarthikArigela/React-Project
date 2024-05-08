import './App.css';
import CakeList from './CakeList';
import { Signup } from './Signup';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CakeDetails from './cakedetails';
import Login from './Login';
import Search from './Search';
import Checkout from './Checkout';

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <Signup/>
    //   <Userslist />
    //   <Row>
    //     <CakeList title="Chocolate" />
    //     <CakeList title="Vanilla" />
    //     <CakeList title="Black Currant" />
    //   </Row>
    //   <Datatable/>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <h1>Cake Gallery</h1>
        <Routes>
          <Route path='/' element={<CakeList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/cake/:cakeid' element={<CakeDetails />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;