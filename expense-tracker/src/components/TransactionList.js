import React from "react";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">Cash <span>₹400</span><button className="delete-btn"></button>x</li> 
      </ul>
    </>
  );
};

export default TransactionList;
