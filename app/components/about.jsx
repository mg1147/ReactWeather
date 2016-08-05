var React = require('react');
var {Link} = require('react-router');

var About  = (props) => {
  return (
    <div>
    <h1 className="text-center">Über</h1>
    <p>Das ist eine Wetter App fürs Web. Absolut ohne sinn und zweck.</p>
    <Link to='http://react.de'>Link zu React</Link>
    </div>
  )
};

module.exports = About;
