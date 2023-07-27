import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import {
  Home,
  Login,
  Layout,
  NoPage,
  User,
  Product,
  Inbox,
  AddProduct,
  EditProduct,
} from "./pages";
export default function App() {
  const { user, login, logout, setUser } = useAuth();

  console.log("render app");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!user.authToken ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="product" element={<Product />} />
              <Route path="user" element={<User />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/edit/:productId" element={<EditProduct />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </AuthContext.Provider>
  );
}
