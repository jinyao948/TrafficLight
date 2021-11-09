import React, { useState } from "react";
import TrafficLight from "./TrafficLight";
import bulbData from "./bulbData";

const App = () => {
  const [activeBulb, setActiveBulb] = useState({});

  const handleControls = (active) => {
    setActiveBulb(active);
  };

  const trafficLights = bulbData.map((bulb, index) => {
    return (
      <TrafficLight
        id={bulb.id}
        color={activeBulb.id === bulb.id ? bulb.color : "black"}
        key={index}
        className="bulb"
      />
    );
  });

  const controlPanel = bulbData.map((bulb, index) => (
    <h2
      key={index}
      onClick={() => handleControls(bulb)}
      id={bulb.id}
      className="button"
    >
      {bulb.id[0].toUpperCase() + bulb.id.substr(1)}
    </h2>
  ));

  return (
    <div className="App">
      <section>
        <div id="control-panel">{controlPanel}</div>
        <div id="traffic-light">{trafficLights}</div>
      </section>
    </div>
  );
};

export default App;
