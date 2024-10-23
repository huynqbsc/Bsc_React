
import './App.css'
import ChangeAvatar from './state/change-avatar'
import ChangeColorCar from './state/change-color-car'
import 'bootstrap/dist/css/bootstrap.css'
import ChangeFontSize from './state/change-font-size'
import ProductList from './props/product'

function App() {

  return (
    <>
      <div className="card">
        <ChangeColorCar />
      </div>
      <br/>
      <div className="card">
        <ChangeAvatar />
      </div>
      <br/>
      <div className="card">
        <ChangeFontSize />
      </div>
      <br/>
      <div className="card">
        <ProductList />
      </div>
    </>
  )
}

export default App
