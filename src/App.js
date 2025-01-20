import React, {useState} from 'react';
import logo from './logo.svg';
import LoanReason from './components/LoanReason';
import BorrowAmount from './components/BorrowAmount';
import MonthlyRepayment from './components/MonthlyRepayment';
import './App.css';

function App() {
  const [interestRate, setInterestRate] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [monthlyRepayment, setMonthlyRepayment] = useState('');

  const handleInterestRateChange = (rate) => {
    console.log(`Received interest rate: ${rate}`);
    setInterestRate(rate);
  };
  
  const handleBorrowAmountChange = (amount) => {
    console.log(`Received amount: ${amount}`);
    setBorrowAmount(amount);
  };

  const handleMonthlyRepaymentChange = (monthly) => {
    console.log(`Received monthly rate: ${monthly}`);
    setMonthlyRepayment(monthly);
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

        {/* Borrow Amount Component */}
        <BorrowAmount onBorrowAmountChange={handleBorrowAmountChange} />

        {/* Monthly Repayment Component */}
        <MonthlyRepayment 
        onMonthlyRepaymentChange={handleMonthlyRepaymentChange} 
        borrowAmount={borrowAmount} 
        interestRate={interestRate} />
        
        <div className='results'>
        <h2>
          Results:
        </h2>

        <div className="row">
          <p>Average interest rate:</p>
          <p className='loan'>
            {interestRate || 'Please select a loan'}
          </p>
        </div>

        <div className="row">
          <p>Est. borrow amount:</p>
          <p className="loan">{borrowAmount ? `£${parseFloat(borrowAmount).toFixed(2)}` : 'Please input your household income'}</p>
        </div>

        <div className="row">
          <p>Est. monthly repayments:</p>
          <p className='loan'>{monthlyRepayment || 'Please enter your repayment period'}</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
