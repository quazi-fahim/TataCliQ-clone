import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/Redux/cart/cartaction';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Product ID:", id); // Check the ID
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/products/${id}`);
                console.log("Fetched product:", res.data); // Log the fetched product
                setProduct(res.data);
                console.log(res.data)
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!product) return <p>Loading product details...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
