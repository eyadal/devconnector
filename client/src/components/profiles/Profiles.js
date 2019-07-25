import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connecct } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';

const Profiles = props => {
  return <div />;
};

Profiles.propTypes = {};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connnect(mapStateToProps, { getProfiles })(Profiles);
