
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";




export function Shopping_Products() {

    let params = useParams();

    const [products, setProducts] = useState([{
        id: null,
        Title: null,
        Price: 0,
        CategoryId: 0,
        Rating: 0
    }]);

    function LoadProducts() {
        axios.get(`http://localhost:3000/products`)
            .then(Response => {
                setProducts(Response.data.filter(product =>
                    product.CategoryId === parseInt(params.catid)
                ))
            }
            )
    }

    useEffect(() => {
        LoadProducts()
    }, [params])


    return (
        <div className=" container-fluid">

            <h3>PRODUCT</h3>

            <section>
                <div className="row">
                    <div className="col-4">
                        <ol>
                            {
                                products.map(product =>
                                    <li key={product.id}>
                                        <Link to={`details/${product.id}`}>{product.Title}</Link>
                                    </li>
                                )
                            }
                        </ol>
                    </div>
                    <div className="col-8">
                        <Outlet />
                    </div>
                </div>
            </section>

            <Link to="/home">Back to Home</Link>
        </div>
    )
}