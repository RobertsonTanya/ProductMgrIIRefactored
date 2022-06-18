const DeleteButton = (props) => {
    const { productId, deleteProduct } = props;

    return (
        <button className='btn del' onClick={e => deleteProduct(productId)}>Delete</button>
    )
}

export default DeleteButton;