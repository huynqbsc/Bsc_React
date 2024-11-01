import ProductData from "../data_product.json"

const arrProduct = [...ProductData];

export default function ProductList() {
    const renderProducts = () => {
        return arrProduct.map((data) => {
            return (
                <div className="col-5" key={data.id}>
                    <img src={data.image} />
                    <h3>{data.name}</h3>
                    <p>Alias: {data.alias}</p>
                    <p>Price: {data.price} $</p>
                    <p>Description: {data.description}</p>
                    <p>Short Description: {data.shortDescription}</p>
                    <p>Quantity: {data.quantity}</p>
                </div>
            );
        });
    };

    return (
        <>
            <h1>List Products</h1>
            <div className="row  justify-content-evenly">
                {renderProducts()}
            </div>

        </>
    );
}
