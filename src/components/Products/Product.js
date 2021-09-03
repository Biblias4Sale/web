import React from 'react'; 
import './ProductStyle.css'


export default function Product ({name, points, id}) {
    return (
    
    <div class="col-xs-6 col-md-4">
       <div class="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/87CEFA/000000" alt=""/></a>
         <div class="caption">
             <h6><a href="#">{name + '   ' + id}</a></h6>
             <span class="price sale">{points}</span>
         </div>
       </div>
     </div>
    )
}