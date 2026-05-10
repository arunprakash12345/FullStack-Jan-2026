// Buttons are provided to increment, decrement, and reset the count.
// The initial count is passed as a prop to the Counter component.
// The count cannot be decremented below 0.

import { useState } from "react";

const Counter = (props) => {
    const { initialValue = 1 } = props;
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(initialValue)
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;