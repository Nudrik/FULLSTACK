import { useState } from "react";
import "./CounterApp.css";
const CounterApp = () => {
    const [count, setCount] = useState(0); //count = 4
    const [backgroundColor, setBackgroundColor] = useState(true);


    const bgColor = backgroundColor? "" : "bg2";
    // setCount(count + 1) // count = 5

    const onIncrement = () => {
        // console.log("hi")
        setCount(count + 1)
    }
    const onDecrement = () => {
        console.log(count);
        setCount(count - 1)
    }
    let bg1 = "";
    let bg2 = "";
    
    const reset = () => {
        console.log(backgroundColor)
        setBackgroundColor(!backgroundColor);
        console.log(backgroundColor);
        setCount(0);
    }

    if (count < 0) {
        console.log(count); //printing -1
        setCount(0);
    }
    //ternary operaot : condition? 1 : 2;
// bg1 = count >=5 ? "bg1" : "";

// ampersand operator (&&)
// bg1 = count > =5 && "bg1";
// bg1 = count < 5 && "bg2";
    
    if (count >= 5) {
        bg1 = "bg1";
    }

    if (count === 5) {
        bg2 = "bg2";
    }

    return (
        // if count != 5 then bg1 = "" ; if count === 5 then bg1 = "bg1"
        <div className={bgColor}>
        <h1 className={bg1}>
            {count}
        </h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={reset}> Reset</button>
        </div>
    )
}   

export default CounterApp;

// whenever the state changes the component re-renders