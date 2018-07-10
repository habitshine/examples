import React from "react";
import gql from "graphql-tag";
import { propType } from "graphql-anywhere";
import { Link } from "react-router-dom";

export default class TopicItem extends React.Component {
  /*static ForumFragment = gql`
    fragment ForumItem_ForumFragment on Forum {
      nodeId
      id
      name
      description
      slug
    }
  `;*/

  static TopicFragment = gql`
    fragment TopicItem_TopicFragment on Topic {
      nodeId
      id
      title
      user {
        nodeId
        avatarUrl
        username
      }
      createdAt
      updatedAt
    }
  `;

  /*static CurrentUserFragment = gql`
    fragment ForumItem_CurrentUserFragment on User {
      nodeId
      isAdmin
    }`;*/

  static propTypes = {
    topic: propType(TopicItem.TopicFragment),
    /*currentUser: propType(ForumItem.CurrentUserFragment),*/
  };

  render() {
    const { topic } = this.props;
    const createdDate = topic.createdAt;
    const updatedDate = topic.updatedAt;

    return (
      <div className="TopicItem">
        <div className="TopicItem-title">
          <Link to={`/forums/topic/1`}>{topic.title}</Link>
        </div>
        <div className="TopicItem-author">{topic.user.username}</div>
        <div className="TopicItem-created">{createdDate}</div>
        <div className="TopicItem-updated">{updatedDate}</div>
      </div>
    );
  }
}
