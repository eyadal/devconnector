import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date }
}) => {
  return <div />;
};

CommentItem.propTypes = {};

export default CommentItem;
