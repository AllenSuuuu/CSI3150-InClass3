import React from "react"; // Import React
import Counter from "./Counter"; // Import Counter

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={appStyle}>
      <Counter />
    </div>
  );
}

export default App;
