import React, {useState} from 'react';
import logo from './logo.svg';
import LoanReason from './LoanReason';
import './App.css';

function App() {
  const [interestRate, setInterestRate] = useState();

  const handleInterestRateChange = (rate) => {
    setInterestRate(rate);
  };

  

  return (
    <div className="App">

      <div className="calculator">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lloyds Mortgage Calculator
        </h1>

        {/* Loan Reason Component */}
        <LoanReason onInterestRateChange={handleInterestRateChange} />

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
          <select>
            <option>Please select</option>
            <option>10 years</option>
            <option>15 years</option>
            <option>20 years</option>
            <option>25 years</option>
            <option>30 years</option>
          </select>
        </div>

        <div className="row">
          <p>Average interest rate:</p>
          <p className='loan'>{interestRate || 'Please select a loan'}</p>
        </div>

        <div className="row">
          <p>Est. monthly repayments:</p>
          <input type="text" className="input" placeholder='£'/>
        </div>

        <div className="row">
          <p>Est. borrow amount:</p>
          <input type="text" className="input" placeholder='£'/>
        </div>

        <div className="row">
          <p>Property price:</p>
          <input type="text" className="input" placeholder='£' />
        </div>
      </div>
    </div>
  );
}

export default App;
