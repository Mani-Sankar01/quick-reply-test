import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroText from "./components/HeroText";
function App() {
  return (
    <>
      <div className="bg-slate-50 h-screen">
        <NavBar />
        <HeroText />
        <HeroSection />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
