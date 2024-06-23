import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LikesPage from "./pages/LikesPage";
import Explore from "./pages/Explore";
import Sidebar from "./components/Sidebar";
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from "../context/authContext";
function App() {
  const {authuser}=useAuthContext();
  console.log("Authenticated user",authuser);
  return (
    //sidebar and footer arre outside routes so it is present in every page
    <>
      <div className="flex text-white">
       
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={authuser?<HomePage />:<Navigate to={"/login"}/>} />
            <Route path="/login" element={!authuser?<LoginPage/>:<Navigate to={"/"}/>} />
            <Route path="/signup" element={!authuser?<SignupPage/>:<Navigate to={"/"}/>} />
            <Route path="/explore" element={authuser?<Explore/>:<Navigate to={"/login"}/>} />
            <Route path="/likes" element={authuser?<LikesPage/>:<Navigate to={"/login"}/>} />
          </Routes>
          <Toaster/>
          {/* <footer>footer</footer> */}
        </div>
      </div>
    </>
  );
}

export default App;
