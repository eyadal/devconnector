import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div class='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 class='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div class='line' />
      </Fragment>
    )}

    <h2 class='text-primary'>Skill Set</h2>
    <div class='skills'>
      <div class='p-1'>
        <i class='fa fa-check' /> HTML
      </div>
      <div class='p-1'>
        <i class='fa fa-check' /> CSS
      </div>
      <div class='p-1'>
        <i class='fa fa-check' /> JavaScript
      </div>
      <div class='p-1'>
        <i class='fa fa-check' /> Python
      </div>
      <div class='p-1'>
        <i class='fa fa-check' /> C#
      </div>
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
