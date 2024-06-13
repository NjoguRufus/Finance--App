import React, { useState, useEffect } from 'eact';
import axios from 'axios';
import DisplayTransactions from './DisplayTransactions';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/transactions/')
     .then(response => {
        setTransactions(response.data);
        setLoading(false);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteTransaction = (transactionId) => {
    axios.delete(`http://localhost:8000/transactions/${transactionId}`)
     .then(response => {
        setTransactions(transactions.filter(transaction => transaction.id!== transactionId));
      })
     .catch(error => {
        console.error(error);
      });
  };

  const handleUpdateTransaction = (transaction) => {
    // TO DO: implement update logic here
    console.log('Update transaction:', transaction);
  };

  return (
    <div>
      <h1>Transactions</h1>
      {loading? (
        <p>Loading...</p>
      ) : (
        <DisplayTransactions transactionsList={transactions} onDelete={handleDeleteTransaction} onUpdate={handleUpdateTransaction} />
      )}
    </div>
  );
};

export default TransactionList;