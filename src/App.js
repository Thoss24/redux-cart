import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const isCartDisplaying = useSelector((state) => state.modal.isDisplaying);

  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetch(
      "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {isCartDisplaying && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
