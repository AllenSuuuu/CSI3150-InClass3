import React, { useState } from "react"; // Import the useState hook

// Set up the counter function
function Counter() {
  const [count, setCount] = useState(0);

  // Define the style for the container
  const counterContainerStyle = {
    border: "2px solid yellow",
    padding: "20px",
    display: "inline-block",
    marginTop: "200px",
    textAlign: "center",
  };

  // Define the style for the Value (start from 0)
  const counterValueStyle = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  // Define the style for the two buttons
  const buttonStyle = {
    margin: "5px",
    padding: "10px",
  };

  return (
    <div style={counterContainerStyle}>
      <div style={counterValueStyle}>{count}</div>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
