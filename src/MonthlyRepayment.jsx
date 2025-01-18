import React, { useState } from 'react';

const MonthlyRepayment = ({ borrowAmount, interestRate, onMonthlyRepaymentChange }) => {
  const [years, setYears] = useState('');

  const handleMonthlyRepaymentChange = (event) => {
    const selectedYears = event.target.value;
    setYears(selectedYears);

    // Validate inputs
    if (!borrowAmount || !interestRate || !selectedYears) {
      onMonthlyRepaymentChange('Please ensure all fields are filled.');
      return;
    }

    // Parse inputs
    const P = parseFloat(borrowAmount); ///////////// Correct ////////
    const annualRate = parseFloat(interestRate.replace('%', '')) / 100;
    const r = annualRate / 12; // Monthly interest rate
    const n = parseInt(selectedYears, 10) * 12; // Total payments

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
      onMonthlyRepaymentChange('Invalid inputs. Please check your entries.');
      return;
    }

    // Calculate monthly repayment using the formula
    const monthlyRepayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    if (!isFinite(monthlyRepayment)) {
      onMonthlyRepaymentChange('Calculation error. Please check your inputs.');
    } else {
      onMonthlyRepaymentChange(monthlyRepayment.toFixed(2)); // Round to 2 decimal places
    }

    console.log({ borrowAmount, interestRate, selectedYears });

  };

  return (
    <div className="row">
      <p>3. Repayment period:</p>
      <select onChange={handleMonthlyRepaymentChange}>
        <option value="">Please select</option>
        <option value="10">10 years</option>
        <option value="15">15 years</option>
        <option value="20">20 years</option>
        <option value="25">25 years</option>
        <option value="30">30 years</option>
      </select>
    </div>
  );
};

export default MonthlyRepayment;
