import { product } from "./types";

interface ProducItemProps {
    item: product;
    setStateModal: boolean;
    changeProduct: (id: number) => void;
}

export default function ProducItem({ item, changeProduct }: ProducItemProps) {
    return (
        <div className="col-6">
            <h3>Name: {item.name}</h3>
            <img src={item.img} width={500} height={400} />
            <p>Price: {item.price}</p>
            <button type="button" className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal" 
            onClick={() => changeProduct(item.id)} >Select</button>
        </div>
    );
}