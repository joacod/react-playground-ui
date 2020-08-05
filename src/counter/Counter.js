import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Clicked {counter} times</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Counter;
