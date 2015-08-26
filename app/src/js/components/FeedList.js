var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  var feedItems = this.props.items.map(function(item)) {
    return <FeedItem title={item.title} desc={item.description} />
  }

  render: function() {
    return (
      <ul className="list-group">
        {feedItems}
      </ul>
    );
  }
});

module.exports = FeedList;