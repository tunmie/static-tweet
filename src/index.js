import moment from "moment";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 3,
  timestamp: "2016-07-30 21:24:37",
};

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({hash}) {
  return (
    <img
      src="https://www.gravatar.com/avatar/${hash}"
      alt="avatar"
      className="avatar"
    />
  );
}

function Message({text}) {
  return <div className="message">{text}</div>;
}

function Author({author}) {
  const {name, handle} = author
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if(count > 0) {
   return (
    <span className="retweet-count">{count}</span>
   );
  }
  else {
    return null;
  }
}

const RetweetButton = ({count}) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {getRetweetCount(count)}
    </span>
  );
}

const LikeButton = ({count}) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && 
        <span className="like-count">
          {countpnpm }
        </span>
      }
    </span>
  )
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"></i>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Tweet tweet={testTweet} />);
