// import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import ProfileImage from '../../assets/profileImage.png';
import PropTypes from 'prop-types';

const ProfileSection = ({ name }) => (
  <DefaultFrame boxShadow={false}>
    <div className="flex items-center gap-4 p-4">
      <img src={ProfileImage} alt="Profile" className="w-32 h-32 rounded-full" />
      <div className="flex gap-1">
        <span className="text-2xl font-extrabold">{name} </span>
        <div className="text-2xl">님</div>
      </div>
      <div className="flex items-end ml-auto">
        <div className="w-32 h-10 rounded-xl border-2 border-gray-200 flex justify-center items-center shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div className="text-xl text-center">내 정보 관리</div>
        </div>
      </div>
    </div>
  </DefaultFrame>
);

ProfileSection.propTypes = {
  name: PropTypes.string,
};

export default ProfileSection;
