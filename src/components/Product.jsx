import React from 'react';
function Product({title, image, description}) {
    return (
            <article className="product">
                <h2 className="product-name">{title}</h2>
                <p className="product-description">{description}</p>
                <img src={image}
                     alt={title}
                />
            </article>
    );
}

export default Product;