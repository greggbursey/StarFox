var data = [
  { Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
  { Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
  { Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
];

//--------------------------------------------------------
var CommentBox = React.createClass({
    loadCommentsFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
    getInitialState: function () {
        return { data: [] };
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
    }
});

//var CommentList = React.createClass({
//    render: function() {
//        return (
//          <div className="commentList">
//            <Comment author="Daniel Lo Nigro">Hello ReactJS.NET World!</Comment>
//            <Comment author="Pete Hunt">This is one comment</Comment>
//            <Comment author="Jordan Walke">This is *another* comment</Comment>
//          </div>
//      );
//    }
//});
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
        <Comment author={comment.Author} key={comment.Id}>
            {comment.Text}{comment.FavNum}
        </Comment>
      );
        });
        return (
      <div className="commentList">
          {commentNodes}
      </div>
    );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
          <div className="commentForm">
              Hello, world! I am a CommentForm.
          </div>
      );
    }
});

var Comment = React.createClass({
    render: function () {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
              {this.props.children}
          </div>
      );
    }
});

ReactDOM.render(
  //<CommentBox data={data} />,//--locally
    <CommentBox url="/comments" pollInterval={2000} />,//--server
  document.getElementById('content')
);

$(document).ready(function () {
    toggleSlideout = function () {
        var slideout = $("#slideout");
        if ($(slideout).width() > 0) {
            slideout.css("width", 0);
        }
        else {
            slideout.css("width", 250);
        }
    }
});