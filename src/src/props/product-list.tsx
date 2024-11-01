import ProducItem from "./product-item";
import { product } from "./types";

interface ProductListProps {
    productsData: product[];
    setStateModal: boolean;
    changeProduct: (id: number) => void;
}

export default function ProductList({ productsData, setStateModal, changeProduct }: ProductListProps) {
    return (
        <div className="row  justify-content-evenly">
            {productsData.length > 0 ?
                <>
                    {productsData.map((productCar) => (
                        <ProducItem key={productCar.id} item={productCar} setStateModal={setStateModal} changeProduct={changeProduct}></ProducItem>
                    ))}
                </>
                : <></>}
        </div>


    );
}