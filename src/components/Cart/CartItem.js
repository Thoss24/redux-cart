import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart_slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {

  const dispatch = useDispatch()

  let item = {
    title: props.title,
    quantity: props.quantity,
    total: props.total,
    price: props.price,
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItem(item))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total}
          <span className={classes.itemprice}>(${props.price})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
