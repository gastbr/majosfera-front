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
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><LandingPage /></Layout>} />
            <Route path="/association/:id" element={<Layout><AssociationPage /></Layout>} />
            <Route path="/market" element={<Layout><MarketPage /></Layout>} />
            <Route path="/associations-list" element={<Layout><AssociationListPage /></Layout>} />
            <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
            <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/login" element={<Layout><LoginPage /></Layout>} />
            <Route path="/profile-update" element={<Layout><ProfileCRUDPage /></Layout>} />
            <Route
              path="/association-register"
              element={<AssociationRegisterPage />}
            />
            <Route path="/association-CRUD" element={<Layout><AssociationCRUDPage /></Layout>} />
            <Route
              path="/association-profile"
              element={<AssociationProfilePage />}
            />
            <Route path="/register-product" element={<RegisterProductPage />} />
            <Route path="/CRUD-product" element={<ProductCRUDPage />} />
            <Route path="/product/:id" element={<Layout><ProductPage /></Layout>} />
            <Route path="/favourite" element={<Layout><FavouritePage /></Layout>} />
            <Route path="/order" element={<Layout><OrderPage /></Layout>} />
            <Route path="/payment" element={<Layout><PaymentPage /></Layout>} />
          </Routes>
        </Router>
      </CartProvider>
    </AppProvider>

  );
};

export default App;
