var React = require('react');


var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h3 className="text-center">WeatherMessage</h3>
      <p>The Weather in {location}</p>
      <p>is {temp} </p>
    </div>
  );
}

module.exports = WeatherMessage;
