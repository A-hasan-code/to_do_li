import React ,{useContext}from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const { user } = useContext(UserContext)
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  )
}

export default Profile
