import logo from './logo.svg';
import './App.css';

const employee = {
  name: "Mikael",
  job: "Programmer",
  age: "20",
  address: {
    state: "São Paulo",
    number: "11960531167",
    country: "Brazil"
  }
}

function App() {
  const { name, job, address } = employee;
  const { state, country, number } = address;
  return (
    <div className="App">
      <header className="App-header">
      <h2>{name}</h2>
      <p>Charge:{job}</p>
      <p>{`Lives in ${state}, ${country} and his number is ${number}`}</p>
      <p>I'm justing learning array destruturing :)</p>
      </header>
    </div>
  );
}

export default App;
