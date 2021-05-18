import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllProducts = () =>{
    const [products, setProducts] = useState([]);
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log("************")
            console.log(res)
            console.log("*************")
            setProducts(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    // delete stuff here maybe




    return(
        <div>
            <h1>All Products</h1>
            {
                products.map((product, i)=>{
                    return<div key = {i}>
                        <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                    </div>
                })
            }
        </div>
    );
};

export default AllProducts;