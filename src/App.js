import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loanReason, setLoanReason] = useState();
  const [interestRate, setInterestRate] = useState();

  const handleLoanReasonChange = (event) => {
    const selectedReason = event.target.value;
    setLoanReason(selectedReason);

    // Determine interest rate based on loan reason
    switch (selectedReason) {
      case 'Basic Mortgage':
        setInterestRate('3.5%');
        break;
      case 'Interest-Only Mortgage':
        setInterestRate('2.8%');
        break;
      case 'Large Loan Amount':
        setInterestRate('4.2%');
        break;
      case 'Short Term Loan':
        setInterestRate('3.0%');
        break;
      case 'High Interest Rate':
        setInterestRate('5.5%');
        break;
      default:
        setInterestRate(''); // Clear if no valid option is selected
    }
  };

  return (
    <div className="App">

      <div className="calculator">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lloyds Mortgage Calculator
        </h1>

        <div className="row">
          <p>Reason for loan:</p>
          <select onChange={handleLoanReasonChange}>
            <option value=''>Please select an option</option>
            <option>Basic Mortgage</option>
            <option>Interest-Only Mortgage</option>
            <option>Large Loan Amount</option>
            <option>Short Term Loan</option>
            <option>High Interest Rate</option>
          </select>
        </div>

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
  <p>{interestRate || 'Please select a loan reason'}</p>
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
