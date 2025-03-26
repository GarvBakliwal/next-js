import React from 'react'

const productDetails = async ({params}:{params : Promise<{productId:string}>}) => {
    const productId =  (await params).productId
  return (
    <div>
        <center>
            <h1>
                Product Details
            </h1>
            <h2>
                Details of Product {productId}
            </h2>
        </center>
    </div>
  )
}

export default productDetails