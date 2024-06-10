import React from "react";

const QuoteList = ({ quotes }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Character</h5>
        <ul className="list-group list-group-flush">
          {quotes.map((quote, index) => (
            <li key={index} className="list-group-item">
              {quote.sentence}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuoteList;
