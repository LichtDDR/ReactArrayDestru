import logo from './logo.svg';
import './App.css';

const employee = {
  name: "Mikael Muniz Ribeiro",
  job: "Programmer",
  age: "20",
  datas: {
    salary: "$100"
  },
  address: {
    state: "São Paulo",
    number: "11960531167",
    country: "Brazil"
  }
}

function App() {
  const { 
    name, 
    job, 
    address: { country, state, number }, 
    datas: { salary }
  } = employee;
  return (
    <div className="App">
      <header className="App-header">
      <h2>{name}</h2>
      <p>Charge: {job}</p>
      <p>{`Lives in ${state}, ${country} and his number is ${number} and salary ${salary}`}</p>
      <p>I'm justing learning array destruturing :)</p>
      </header>
    </div>
  );
}

export default App;
