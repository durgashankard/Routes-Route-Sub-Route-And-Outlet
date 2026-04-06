
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";




export function Shopping_Home() {

    const [categories, setCategories] = useState([{ CategoryId: 0, Name: null }]);

    function LoadCategories() {
        axios.get('http://localhost:3000/categories')
            .then(response =>
                setCategories(response.data)
            )
    }

    useEffect(() => {
        LoadCategories();
    }, []);


    return (
        <div className=" container-fluid">
            <ul className="list-unstyled list-group w-25">
                {
                    categories.map(category =>
                        <li className="list-group-item list-group-item-primary my-2" key={category.CategoryId}>
                            <Link className="btn" to={`/products/${category.CategoryId}`}>{category.Name}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}