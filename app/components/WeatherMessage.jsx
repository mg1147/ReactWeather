var React = require('react');


var WeatherMessage = ({temp,location}) => {
  return (
    <div>
      <h3 className="text-center"></h3>
      <p>The Weather in {location} is {temp}</p>
      <p> </p>
    </div>
  );
}

module.exports = WeatherMessage;
