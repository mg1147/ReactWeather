var React = require('react');
var {Link} = require('react-router');
var Example = (props) => {
  return (
    <div>
    <h1 className="text-center">Examples</h1>
    <p> hier sind ein paar test Städte: </p>
    <ol>
      <li>
        <Link to='/?loction=Essen'>Essen, DE</Link>
      </li>
      <li>
            <Link to='/?loction=Rio'>Rio, Brasil</Link>
      </li>
    </ol>
    </div>
  )
};

module.exports = Example;
