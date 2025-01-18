import React, { useState } from 'react';


const BorrowAmount = ({ onBorrowAmountChange }) => {
    const [householdIncome, setHousholdIncome] = useState('');

    const handleIncomeChange = (event) => {
        const income = event.target.value;

        setHousholdIncome(income);

        if (!isNaN(income) && income > 0) {
            const borrowAmount = (income * 4.5).toFixed(2); // To 2 decimal places
            onBorrowAmountChange(`£${borrowAmount}`);
        } else {
            onBorrowAmountChange('');
        }
    };

  return (
    <div className="row">
        <p>2. Household income:</p>
        <input type="text" className="input" placeholder='Per year' value={householdIncome} onChange={handleIncomeChange}/>
    </div>
  );
};

export default BorrowAmount;