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
import ProductCRUDPage from "./pages/ProductCRUDPage";
import ProductPage from "./pages/ProductPage";
import FavouritePage from "./pages/FavouritePage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import AssociationCRUDPage from "./pages/AssociationCRUDPage";
import ProfileCRUDPage from "./pages/ProfileCRUDPage";
import { requestCookie } from "./services/axios";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    requestCookie()
      .then(() => {
        console.log("CSRF cookie requested successfully");
      })
      .catch((error) => {
        console.error("Error requesting CSRF cookie:", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/association/:id" element={<AssociationPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/associations-list" element={<AssociationListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile-update" element={<ProfileCRUDPage />} />
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
        <Route path="/CRUD-product" element={<ProductCRUDPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
