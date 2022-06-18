import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/form.css';
import Form from './Form';

const Edit = () => {
    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = (productParams) => {
        axios.put(`http://localhost:5000/api/product/${id}`, productParams)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Edit Menu</h2>
            {loaded && 
                <Form submittingProps={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
            }
        </div>
    )
}
export default Edit;