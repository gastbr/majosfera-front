import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AssociationPage from "./pages/AssociationPage";
import MarketPage from "./pages/MarketPage";
import AssociationListPage from "./pages/AssociationListPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AssociationProfilePage from "./pages/AssociationProfilePage";
import AssociationRegisterPage from "./pages/AssociationRegisterPage";
import RegisterProductPage from "./pages/RegisterProductPage";
// import RegisterProductPage from "./pages/ProductCRUDPage";
// import ProductPage from "./pages/ProductPage";
// import FavouritePage from "./pages/FavouritePage";
// import OrderPage from "./pages/OrderPage";
// import PaymentPage from "./pages/PaymentPage";
import AssociationCRUDPage from "./pages/AssociationCRUDPage";

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
        <Route path="/association" element={<AssociationPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/associations-list" element={<AssociationListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/association-register"
          element={<AssociationRegisterPage />}
        />
        <Route path="/association-CRUD" element={<AssociationCRUDPage />} />
        <Route
          path="/association-profile"
          element={<AssociationProfilePage />}
        />
        <Route path="/register-product" element={<RegisterProductPage />} />
        {/* 
       

                <Route path="/CRUD-product" element={<ProductCRUDPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
