import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Products/Product'
import { getProducts } from '../../redux/actions'
import { NavLink } from 'react-router-dom';


export default function Catalogue () {
const dispatch = useDispatch(); 
const allProducts = useSelector((state) => state.products)
const [currentPage, setCurrentPage] = useState(1); 
const [productsPerPage, setProductsPerPage] = useState(15); 
const lastProduct = currentPage * productsPerPage; 
const firstProduct = lastProduct - productsPerPage; 
const product = allProducts.slice(firstProduct, lastProduct)



const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
}



useEffect(() =>{
    dispatch(getProducts())
}, [dispatch])

    return (
    <div>
        <h2>Productos disponibles</h2>
        <div>
        {product?.map((obj) => {
            return (
                <NavLink to={'/details/' + obj.id}>
                     <Product
                     name={obj.name} points={obj.points}/>
                </NavLink>
                
            )
        }
       

        )}
       
        </div>
    </div>
    )
}