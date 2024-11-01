import ProductList from "./product-list";
import blackcar from "../assets/images/products/black-car.jpg";
import steelcar from "../assets/images/products/steel-car.jpg";
import silvercar from "../assets/images/products/silver-car.jpg";
import redcar from "../assets/images/products/red-car.jpg";
import Modal from "./modal";

import { useState } from "react";
import { product } from "./types";

const products = [
    { id: 1, name: 'black car', img: blackcar, price: 1000 },
    { id: 2, name: 'red car', img: redcar, price: 2000 },
    { id: 3, name: 'silver car', img: silvercar, price: 3000 },
    { id: 4, name: 'steel car', img: steelcar, price: 4000 },
];

export default function ExerciseCarStore() {
    const [productDetail, setProductDetail] = useState<product>(products[0]);
    const handleChangeProduct = (productId: number) => {
        setProductDetail(products.find(el => el.id === productId) as product)
    }
    return <>
        <Modal content={productDetail} setStateModal={false} />
        <ProductList productsData={products} setStateModal={true} changeProduct={handleChangeProduct} />
    </>;
}
