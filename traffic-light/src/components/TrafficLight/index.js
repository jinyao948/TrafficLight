import React from 'react';


const TrafficLight = (props) => {

  return (
    <div
      style={{ background: props.color }}
      className="bulb"
      id={props.id}
    />
  )
}

export default TrafficLight