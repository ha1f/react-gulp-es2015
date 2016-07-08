var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div>
                Hello はるふ world!
            </div>
        );
    }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));
