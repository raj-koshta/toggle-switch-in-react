import React from 'react'
import './ToggleSwitch.css'
import { useState } from 'react'

const ToggleSwitch = () => {

    const [isOn, setIson] = useState(false);

    const handleToggleSwitch = ()=>{
        setIson(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";

    const toggleBGColor = {backgroundColor: isOn ? "#4caf50" : ""};

  return (
    <div className='toggle-switch' onClick={handleToggleSwitch}
        style={toggleBGColor}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className='switch-state'>{checkIsOn}</span>
      </div>
    </div>
  )
}

export default ToggleSwitch
