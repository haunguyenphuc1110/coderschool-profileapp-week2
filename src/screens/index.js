import React from 'react';
import profileData from '../mocks/profileData';
import Profile from './Profile'

const ProfileScreen = () => <Profile {...profileData} />

export default ProfileScreen;