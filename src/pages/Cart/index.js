import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

import Template from '../../components/Template';
import { Container, ProductTable } from './style';

function Cart() {
  function increment(product) {}
  function decrement(product) {}

  const [cart, setCart] = useState([
    {
      id: 1,
      image: '',
      title: 'Camiseta verde',
      quantity: 1,
      price: 30.0,
    },
  ]);
  return (
    <Template>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.images} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                </td>
                <td>
                  <div>
                    <button type='button' onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color='#f62f5e' />
                    </button>
                    <input
                      type='number'
                      name='amount'
                      readOnly
                      value={product.quantity}
                    />
                    <button type='button' onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color='#f62f5e' />
                    </button>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>
                  <FaRegTrashAlt size={20} color='#f62f5e' onClick={() => {}} />
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <Link to='/'>Back to Shop</Link>
          <button>checkout</button>
        </footer>
      </Container>
    </Template>
  );
}

export default Cart;
