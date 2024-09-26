import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./productList.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    const generateSlug = (title) => {
      return title
        .toLowerCase()                    
        .replace(/[^a-z0-9\s-]/g, '')     
        .replace(/\s+/g, '-')            
        .replace(/-+/g, '-')            
        .trim();                        
    };
    

    const handleCardClick = (id, title) => {
      const slug = generateSlug(title)
        navigate(`/${slug}/productDetails/${id}`);
    };

    if (!products) return <div>Loading...</div>;

    return (
        <div>
            <h1>Products</h1>
            <div className="container">
                <div className="cards">
                    {products.map(product => (
                        <div key={product.id} className="card" onClick={() => handleCardClick(product.id, product.title)}>
                            <div className="image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="title">
                                <p>{product.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
