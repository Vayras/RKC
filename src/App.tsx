import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import {Deals} from "./components/Deals.tsx";
import {Carousel} from "rsuite";
import {HomepageCard} from "./components/HomepageCard";
import {ProductPage} from "./components/ProductPage.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";

function App() {
  return (
      <div className={"bg-gray-100 w-full min-h-screen"}>
        <div className=''><Navbar/></div>
        <Routes>
          <Route path="/" element={
            <div>
              <Carousel/>
              <HomepageCard/>
              <Deals/>
            </div>
          }/>
          <Route path="/products/1" element={<ProductPage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
      </div>

  );
}

export default App;
