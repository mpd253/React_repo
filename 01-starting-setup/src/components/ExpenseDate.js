import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: 'numeric' })

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{month}</div>
        <div className='expense-date__month'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;