import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tool/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>


      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
