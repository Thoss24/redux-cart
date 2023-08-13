import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector,} from 'react-redux';

const Cart = () => {

  const currentCart = useSelector(state => state.cart.cartItems);
  const cartTotal = useSelector(state => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {currentCart.length === 0 ? <li>Cart is empty.</li> : currentCart.map((item) => (
        <CartItem 
        title={item.title}
        price={item.price}
        description={item.description}
        total={item.total}
        quantity={item.quantity}
        id={item.id}
        />
      ))}
      </ul>
      {`$ ${cartTotal}`}
    </Card>
  );
};

export default Cart;
