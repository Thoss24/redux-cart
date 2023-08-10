import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { sendData } from "./store/cart_slice";
import { useDispatch } from "react-redux";
import Notification from "./components/notification/Notification";

function App() {
  const isCartDisplaying = useSelector((state) => state.modal.isDisplaying);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.modal.notification);

  let isInitial = true;

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendData(cart));
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartDisplaying && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
