import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBap/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Users from './pages/users/Users';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
     <Routes>
       <Route index element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact"  element={ <Contact />}/>
       <Route path="/users"  element={ <Users />}/>
       <Route path="/userList"  element={ <UserList />}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
