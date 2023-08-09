import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal_slice';

const CartButton = () => {

  const numberOfCartItems = useSelector(state => state.cart.numberOfItems);

  const dispatch = useDispatch()

  const toggleCartDisplayHandler = () => {
    dispatch(modalActions.setDisplaying())
  };

  return (
    <button className={classes.button} onClick={toggleCartDisplayHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
