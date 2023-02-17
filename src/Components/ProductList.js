import classes from "./ProductList.module.css";
import React, { Button } from "react-bootstrap";

const ProductList=(item)=>{
    return(
<div className={classes.div} >
<header>{item.title}</header>
<img src={item.imageUrl} alt={item.title}/>

<span >
  <ul>Rs{item.price}<br/>
  <Button>AddtoCart</Button>
  </ul>
</span>
</div>
    )
}
export default ProductList;