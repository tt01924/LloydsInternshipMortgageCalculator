import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="calculator">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lloyds Mortgage Calculator
        </h1>

        <div className="row">
          <p>Property price:</p>
          <input type="text" className="input" placeholder='£' />
        </div>

        <div className="row">
          <p>Income:</p>
          <input type="text" className="input" placeholder='Per year'/>
        </div>

        <div className="row">
          <p>Deposit:</p>
          <input type="text" className="input" placeholder='£'/>
        </div>

        <div className="row">
          <p>Repayment period:</p>
          <input type="text" className="input" placeholder='No. of years'/>
        </div>

        <div className="row">
          <p>Average interest rate:</p>
          <input type="text" className="input" placeholder='%'/>
        </div>

        <div className="row">
          <p>Est. monthly repayments:</p>
          <input type="text" className="input" placeholder='£'/>
        </div>

        <div className="row">
          <p>Est. borrow amount:</p>
          <input type="text" className="input" placeholder='£'/>
        </div>
      </div>
    </div>
  );
}

export default App;
