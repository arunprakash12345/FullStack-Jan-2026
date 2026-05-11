import { useState, useEffect } from 'react';

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("component updated or mounted")

        return () => {
            console.log("Do something here you want to do when unmounting a component")
        };
    }, [count]);

    useEffect(() => {
        // This will be triggered only during the mounting phase and not during the updation phase.
    }, []);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Effect;