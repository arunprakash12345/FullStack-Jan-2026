import { useState } from 'react'
import './App.css'

// Components
import TemperatureInput from './component/TemperatureInput';
import TemperatureDisplay from './component/TemperatureDisplay';
import Effect from './component/Effect';

function App() {
  const [temperature, setTemperature] = useState(0);

  const handleTemperatureChange = (newTemp) => {
    console.log(newTemp);
    setTemperature(newTemp);
  };

 return (
  <div>
    {/* <TemperatureInput temperature={temperature} onTemperatureChange={handleTemperatureChange} />
    <TemperatureDisplay temperature={temperature} /> */}
    <Effect />
  </div>
 );
}

export default App
