
import './App.css'
import ChangeAvatar from './state/change-avatar'
import ChangeColorCar from './state/change-color-car'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import ChangeFontSize from './state/change-font-size'
import ProductList from './props/product'
import ExerciseCarStore from './props/exercise-car-store'

function App() {

  return (
    <div className='row'>
      <ExerciseCarStore />
      <div className="card">
        <ChangeColorCar />
      </div>
      <br />
      <div className="card">
        <ChangeAvatar />
      </div>
      <br />
      <div className="card">
        <ChangeFontSize />
      </div>
      <br />
      <div className="card">
        <ProductList />
      </div>
      <br />
      <div >
        
      </div>

      <br />
      {/* <iframe src='https://bsc-research-portfolio.streamlit.app/~/+/' width={1000} height={600}></iframe> */}
    </div>
  )
}

export default App
