import { useState } from 'react';

function TemperatureInput({ temperature, onTemperatureChange }) {
    return (
        <div>
            <label>Enter Temperature:
                <input
                    type='number'
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e.target.value)}
                />
            </label>
        </div>
    );
}

export default TemperatureInput;