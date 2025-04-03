import { useState, useEffect } from "react";
import "./CounterApp.css";
import { useNavigate } from "react-router-dom";

const CounterApp = () => {
  const [count, setCount] = useState(0); //count = 4
  const [counter, setCounter] = useState(0); //

  useEffect(() => {
    console.log("useEffect is triggered");
  },[count, counter]);

  //1) without dependency array - it will be called whenever the component updates
  // 2) with empty dependancy array - it will be called only once when
  //  component is rendered first time
  // 3) with dependancy array - it will be called whenever the dependencies change
//dependancy array is optional



  // const [counter, setCounter] = useState(0); 
  const county = count;
  const [backgroundColor, setBackgroundColor] = useState(true);

  const bgColor = backgroundColor ? "" : "bg2";
  // setCount(count + 1) // count = 5

  // useEffect(() => {
  //   console.log("useEffect called"); // this will be called on every render
    
  // },[count])

  // const navigate = useNavigate();

  const onIncrement = () => {
    // navigate("/about");
    // console.log("hi");
    setCount(count + 1); // count = 5
    
  };
  const onDecrement = () => {
    console.log(count);
    setCounter(counter-1);
    // setCount(count - 1);
  };
  let bg1 = "";
  let bg2 = "";

  const reset = () => {
    setCount(0);
  };

  if (count < 0) {
    console.log(count); //printing -1
    setCount(0);
  }
  //ternary operaot : condition? 1 : 2;
  // bg1 = count >=5 ? "bg1" : "";

  // ampersand operator (&&)
  // bg1 = count > =5 && "bg1";
  // bg1 = count < 5 && "bg2";

  if (count>= 5) {
    bg1 = "bg1";
  }

  if (count === 5) {
    bg2 = "bg2";
  }

  // const handleNavigate = () => {
  //   navigate("/about");
  // }
  return (
    // if count != 5 then bg1 = "" ; if count === 5 then bg1 = "bg1"
    <div className={bg2}>
      <h1 className={bg1}>
        {count}
      </h1>
      <h1>
      {counter}
      </h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

export default CounterApp;

// whenever the state changes the component re-renders
