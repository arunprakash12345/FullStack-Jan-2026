import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterRedux from "./components/counterRedux";

function App() {
  return (
    <>
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </>
  );
}

export default App;
