import React, {useState} from 'react';


function Products() {

    const productsList = [
        {
          id: 1,
          image: "/images/dress1.jpg",
          title: "Midi sundress with shirring detail",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["X", "L", "XL", "XXL"],
          price: 29.9
        },
        {
          id: 2,
          image: "/images/dress2.jpg",
          title: "Midi sundress with ruched front",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["X", "M", "L"],
          price: 18.9
        },
        {
          id: 3,
          image: "/images/dress3.jpg",
          title: "Midi dress in pink ditsy floral",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["X", "M", "L"],
          price: 14.9
        },
        {
          id: 4,
          image: "/images/dress4.jpg",
          title: "cami maxi dress in polka dot",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["XL"],
          price: 25.9
        },
        {
          id: 5,
          image: "/images/dress5.jpg",
          title: "Frill mini dress in yellow polka dot",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["X", "L", "XL"],
          price: 10.9
        },
        {
          id: 6,
          image: "/images/dress6.jpg",
          title: "Midi tea dress in blue and red spot",
          description: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
          availableSizes: ["XL", "XXL"],
          price: 49.9
        }
      ]
    


    return (
        <div className="productListContainer">
            {productsList.map(({image, title, description, price}) => 
            <ProductBreakDown 
            key={productsList.id}
            image={image}
            title={title}
            // description={description}
            price={price}
            />
            )}
            
        </div>
    )
}

const ProductBreakDown = ( { image, title, description, price }) => {
return (
    <section className="productBreakDown">
      <img src={image} alt={title}></img>
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        <div className="priceNbutton">
        <h2>${price}</h2>
        <button>Add to Cart</button>
        </div>
    </section>
)
}

export default Products
