import React from 'react';


function Product({title, image, description}) {
    return (
        <article className="product">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <p className="product-description">
                {description}
            </p>
        </article>
    )
}

export default Product;