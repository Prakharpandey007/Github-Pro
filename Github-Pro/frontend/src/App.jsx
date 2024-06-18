import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LikesPage from "./pages/LikesPage";
import Explore from "./pages/Explore";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    //sidebar and footer arre outside routes so it is present in every page
    <>
      <div className="flex text-white">
       
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/likes" element={<LikesPage />} />
          </Routes>
          {/* <footer>footer</footer> */}
        </div>
      </div>
    </>
  );
}

export default App;
