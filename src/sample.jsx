import React, { useState } from 'react';

const MonthlyRepayment = ({ borrowAmount, interestRate, onMonthlyRepaymentChange }) => {
  const [years, setYears] = useState('');

  const handleMonthlyRepaymentChange = (event) => {
    const selectedYears = event.target.value;
    setYears(selectedYears);

    // Ensure all required values are provided
    if (!borrowAmount || !interestRate || !selectedYears) {
      onMonthlyRepaymentChange('Invalid inputs. Please ensure all fields are filled.');
      return;
    }

    // Convert interest rate to decimal and calculate monthly interest rate
    const annualRate = parseFloat(interestRate.replace('%', '')) / 100;
    const monthlyRate = annualRate / 12;

    // Convert years to total number of payments (months)
    const totalPayments = parseInt(selectedYears, 10) * 12;

    // Calculate the monthly repayment using the formula
    const P = parseFloat(borrowAmount);
    const r = monthlyRate;
    const n = totalPayments;

    const monthlyRepayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // If the formula results in NaN or Infinity (invalid inputs), handle gracefully
    if (isNaN(monthlyRepayment) || !isFinite(monthlyRepayment)) {
      onMonthlyRepaymentChange('Invalid calculation. Please check your inputs.');
    } else {
      // Pass the formatted monthly repayment back to the parent
      onMonthlyRepaymentChange(monthlyRepayment.toFixed(2));
    }
  };

  return (
    <div className="row">
      <p>3. Repayment period:</p>
      <select onChange={handleMonthlyRepaymentChange}>
        <option value=''>Please select</option>
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
