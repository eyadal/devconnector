import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth
}) => {
  return <div />;
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { CommentItem }
)(CommentItem);
