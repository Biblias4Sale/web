import React from 'react'
import { productImg } from './ProductStyle.js'
import Camaras from '../../assets/camaras.jpg'
import { productDetail, productTitle, productDetail2 } from './ProductStyle'

export default function Product ({ name, points }) {
  return (
    <div>
      <div style={productTitle}><a><img src={Camaras} alt='Image not found' style={productImg} /></a>
        <div style={productDetail}>
          <h6><a>{name}</a></h6>
        </div>
        <div style={productDetail2}>
          <span>{points}</span>
        </div>
      </div>
    </div>
  )
}
