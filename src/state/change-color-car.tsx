import blackcar from "../assets/images/products/black-car.jpg";
import steelcar from "../assets/images/products/steel-car.jpg";
import silvercar from "../assets/images/products/silver-car.jpg";
import redcar from "../assets/images/products/red-car.jpg";
import { useState } from "react";

export default function ChangeColorCar() {
    const [colorCar, setColorCar] = useState(blackcar);

    return (
        <div>
            <h1>Change Color Car</h1>
            <div style={{ width: '100%' }}>
                <img src={colorCar} width={800} height={680} />
                <br/>
                <br/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={() => setColorCar(blackcar)}>Black color</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setColorCar(steelcar)}>Steel color</button>
                    <button type="button" className="btn btn-light" onClick={() => setColorCar(silvercar)}>Silver color</button>
                    <button type="button" className="btn btn-danger" onClick={() => setColorCar(redcar)}>Red color</button>
                </div>
            </div>
        </div>
    );
}