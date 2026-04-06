
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"




export function Shopping_Details() {

    let params = useParams();

    const [products, setProducts] = useState({
        id: null,
        CategoryId: 0,
        Title: null,
        Rating: 0,
        Price: 0
    });

    function LoadProducts() {
        axios.get(`http://localhost:3000/products/${params.prodid}`)
            .then(Response => {
                setProducts(Response.data)
            })
    }

    useEffect(() => {
        LoadProducts();
    }, [params])



    return (
        <div className=" container-fluid">
            <h3>Product Details</h3>

            {/* <dl>
                <dt>Name</dt>
                <dd>{products.Title}</dd>
                <dt>Price</dt>
                <dd>{products.Price}</dd>
                <dt>Rating's</dt>
                <dd> {products.Rating} </dd>
            </dl> */}

            <div className="card mt-3 bg-body-secondary w-25">
                <div className="card-header fw-bold text-center">
                    Name : {products.Title}
                </div>
                <div className="card-body">
                    Price : {products.Price}
                    <br />
                    Rating : {products.Rating}
                </div>

            </div>



        </div>
    )
}