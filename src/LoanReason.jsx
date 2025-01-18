import React, { useState } from 'react';

const LoanReason = ({ onInterestRateChange }) => {
  const [loanReason, setLoanReason] = useState('');

  const handleLoanReasonChange = (event) => {
    const selectedReason = event.target.value;
    setLoanReason(selectedReason);

    let rate = '';
    switch (selectedReason) {
      case 'Basic Mortgage':
        rate = '3.5%';
        break;
      case 'Interest-Only Mortgage':
        rate = '2.8%';
        break;
      case 'Large Loan Amount':
        rate = '4.2%';
        break;
      case 'Short Term Loan':
        rate = '3.0%';
        break;
      case 'High Interest Rate':
        rate = '5.5%';
        break;
      default:
        rate = ''; // Clear if no valid option is selected
    }

    console.log(`Selected loan reason: ${selectedReason}, interest rate: ${rate}`);
    
    // Pass the calculated interest rate back to the parent
    onInterestRateChange(rate);
  };

  return (
    <div className="row">
      <p>1. Reason for loan:</p>
      <select onChange={handleLoanReasonChange}>
        <option value=''>Please select</option>
        <option>Basic Mortgage</option>
        <option>Interest-Only Mortgage</option>
        <option>Large Loan Amount</option>
        <option>Short Term Loan</option>
        <option>High Interest Rate</option>
      </select>
    </div>
  );
};

export default LoanReason;
