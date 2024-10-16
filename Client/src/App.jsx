import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login";
import axios from "axios";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import CarDetail from "./Pages/CarDetail";
import OrderForm from "./Pages/OrderForm";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="/car" element={<Cars />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/form" element={<OrderForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
