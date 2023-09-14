import React from 'react';
import profile from './profile.png'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={profile} alt="Profile" />
    </div>
  );
};

export default UserProfile;
