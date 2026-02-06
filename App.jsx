
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let fooditems = ["Dal", "Green-Vegetable", "milak", "salad", "Roti", "egg"];

  return <>
    <h1>Healthy Food</h1>

    <ul className="list-group">

      {fooditems.map((item) => (
        <li key={item} className="list-group-item" > {item}</li>
      ))}

    </ul>
  </>
}
export default App;