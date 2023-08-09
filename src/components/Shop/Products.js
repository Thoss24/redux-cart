import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const products = [
    {
      title: 'Test 1',
      price: 6,
      description: "Test one",
      total: 6,
      quantity: 1,
      id: 1
    },
    {
      title: 'Test 2',
      price: 7,
      description: "Test two",
      total: 7,
      quantity: 1,
      id: 2
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
          price={item.price}
          title={item.title}
          description={item.description}
          total={item.total}
          quantity={item.quantity}
          key={item.id}
           />
        ))}
      </ul>
    </section>
  );
};

export default Products;
