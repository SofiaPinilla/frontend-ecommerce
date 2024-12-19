import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { Button, Empty } from 'antd'
import { DeleteOutlined  } from "@ant-design/icons";
import OrderService from '../../services/OrderService';
 
const Cart = () => {
    const {cart, clearCart} = useContext(ProductContext)

    if(cart.length == 0){
        return <Empty description="The cart is empty" />
    }

  return (
    <div>{cart.map(product =>{
        return <div key={product._id}>
            <p>Product name: {product.name} Price: {product.price} €</p>
        </div>
    })}
    <Button onClick={clearCart}>Clear cart <DeleteOutlined /></Button>
    <Button onClick={async()=>{
       await OrderService.createOrder(cart)
        clearCart()
        }}>Create order</Button>
    
    </div>
  )
}

export default Cart