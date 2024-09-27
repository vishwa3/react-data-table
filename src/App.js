import React, { useState } from "react";
import "./App.css";
import users from "./users.json";

function App() {
  const [showCount, setShowCount] = useState(5);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const lastPageNumber = Math.ceil(users.length / showCount);
  return (
    <div className="app_container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {users
            .slice(
              currentPageNumber * showCount - showCount,
              currentPageNumber * showCount
            )
            .map(({ id, name, age, occupation }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{occupation}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <footer className="footer">
        <select
          onChange={(e) => {
            setShowCount((count) => {
              setCurrentPageNumber(1);
              return e.target.value;
            });
          }}
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <button
          disabled={currentPageNumber === 1}
          onClick={() => setCurrentPageNumber((page) => page - 1)}
        >
          Prev
        </button>
        <span
          style={{ fontWeight: 600 }}
        >{`Page ${currentPageNumber} of ${lastPageNumber}`}</span>
        <button
          disabled={currentPageNumber === lastPageNumber}
          onClick={() => setCurrentPageNumber((page) => page + 1)}
        >
          Next
        </button>
      </footer>
    </div>
  );
}

export default App;
