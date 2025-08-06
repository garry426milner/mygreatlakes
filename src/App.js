import React from 'react';
import Header from '../src_components/Header';
import ExpenseForm from '../src_components/ExpenseForm';
import ExpenseList from '../src_components/ExpenseList';

function App() {
  return (
    <div>
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
