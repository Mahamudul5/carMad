import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import AddItem from './AddItem/AddItem';
import './App.css';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import LogIn from './LogIn/LogIn';
import RequireAuth from './LogIn/RequireAuth';
import ManageInventory from './ManageInventory/ManageInventory';
import Myitem from './Myitem/Myitem';
import PageNotFound from './PageNotFoound/PageNotFound';
import RemoveItem from './RemoveItem/RemoveItem';
import SignUp from './SignUp/SignUp';
import UpdateSingleItem from './UpdateSingleItem/UpdateSingleItem';

function App() {
  return (
    <div className='bg'>
      <Header></Header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/UpdateSingleItem/:Id" element={<RequireAuth>
          <UpdateSingleItem />
        </RequireAuth>} />
        <Route path="/AddItem" element={<RequireAuth>
          <AddItem />
        </RequireAuth>} />
        <Route path="/Myitem" element={<Myitem />} />
        <Route path="/RemoveItem" element={<RemoveItem />} />
        <Route path="/ManageInventory" element={<ManageInventory />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
