import "./App.css";
import Button from "./Components/Button";
import ConditionalRendering from "./Components/ConditionalRendering";
import Counter from "./Components/counter/Counter";
import DisplayData from "./Components/DisplayData";
import MyComponent from "./Components/MyComponent";

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const person = {
    name: "Aryan Thakur",
    age: 23,
  };
  const username = "ArunPrakash";
  const isLoggedIn = true;
  return (
    <>
      {/* <MyComponent message="Hello" />
      <MyComponent message="Hello - 1" /> */}
      <DisplayData fruits={fruits} person={person} />
      <ConditionalRendering isLoggedIn={isLoggedIn} username={username} />
      <Button />
      <Counter />
    </>
  );
}

export default App;
