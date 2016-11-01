var React = require('react');

/*var About = React.createClass({
    render: function(){
        return(
            <h1>About compnent</h1>
        );
    }
});*/

//arrow function use - if component use only render method we can use it

var About = (props) => {
    return (
        <h1>About compnent</h1>
    );
};

module.exports = About;