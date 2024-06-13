import React from 'react';

const DisplayTransactions = ({ transactionsList, onDelete, onUpdate }) => {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Income?</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactionsList.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.is_income? "Yes" : "No"}</td>
            <td>{transaction.date}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
              <button onClick={() => onUpdate(transaction)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTransactions;