import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Form from '../components/Form';
import AllProducts from '../components/AllProducts';


const Main = (props) => {
    const { products, setProducts } = props;

    const createNewProduct = (productParams) => {
        axios.post(`http://localhost:5000/api/product/`, productParams)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
            .then(res => {
                console.log(res);
                setProducts(products.filter(product => product._id != id));
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2>Product Manager</h2>
            <Form initialTitle={''} initialPrice={''} initialDescription={''} submittingProps={createNewProduct} />
            <hr />
            <AllProducts deleteProduct={deleteProduct} products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main;