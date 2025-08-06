import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form>
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
