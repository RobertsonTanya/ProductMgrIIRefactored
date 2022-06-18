import React, { useState } from 'react';

import '../styles/form.css';

const Form = (props) => {
    const { initialTitle, initialPrice, initialDescription, submittingProps } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const productParams = {title, price, description};

    const onSubmitHandler = (e) => {
        e.preventDefault();
        submittingProps(productParams);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" value={title} type="text" onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" value={price} type="number" onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descr">Description</label>
                    <input id="descr" value={description} type="text" onChange={e=>setDescription(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;