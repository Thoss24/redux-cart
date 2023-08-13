import { modalActions } from "./modal_slice";
import { cartActions } from "./cart_slice";

export const getData = () => {
  return async (dispatch) => {
    dispatch(modalActions.setNotification({
      title: "Pending",
      message: 'Request pending'
    }))
    const getRequest = async () => {
      const response = await fetch(
        "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json");
        
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      return data
    };
    try {
      const cartData = await getRequest();
      dispatch(cartActions.replaceCart(cartData))
      dispatch(modalActions.setNotification({
        title: 'Success',
        message: 'Request successful'
      }))
    } catch (error) {
      console.log(error);
      dispatch(modalActions.setNotification({
        title: 'Error',
        message: 'Request failed'
      }))
      throw new Error("Something went wrong");
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      modalActions.setNotification({
        title: "Pending",
        message: "Request pending",
      })
    );
    const sendRequest = async () => {
      let response = await fetch(
        "https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };
    try {
      await sendRequest();
      dispatch(
        modalActions.setNotification({
          title: "Success",
          message: "Request successful",
        })
      );
    } catch (error) {
        console.log(error)
      dispatch(
        modalActions.setNotification({
          title: "Error",
          message: "Request failed",
        })
      );
    }
  };
};
