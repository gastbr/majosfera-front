import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AssociationPage from "./pages/AssociationPage";
import MarketPage from "./pages/MarketPage";

function App() {
  return (
    // <div className="flex flex-col gap-20 items-center justify-center bg-amber-800/50 h-screen">
    //   <div className="flex gap-40">
    //     <img className="w-48" src="/logo-light-nobg.png" alt="Logo" />
    //     <img className="w-48" src="/logo-dark-nobg.png" alt="Logo" />
    //   </div>
    //   <div className="flex flex-col items-center gap-8 bg-amber-700/70 p-12 rounded-3xl">
    //     <p className="text-6xl text-stone-800 font-bold tracking-widest">oli 🌊</p>
    //     <p className="text-xs text-stone-700">tailwind funciona</p>
    //   </div>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/associations" element={<AssociationPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
