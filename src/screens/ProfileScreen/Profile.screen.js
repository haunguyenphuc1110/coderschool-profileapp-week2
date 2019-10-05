import React from 'react';
import profileData from '../../mocks/profileData';
import Profile from './Profile.view';

const ProfileScreen = (props) => <Profile {...profileData} {...props} />

export default ProfileScreen;