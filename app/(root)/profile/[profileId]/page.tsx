import React from 'react'

const ProfilePage = ({params} : { params: {profileId: string}}) => {
  return (
    <div>
      <p>id: {params.profileId}</p>
    </div>
  )
}

export default ProfilePage;
