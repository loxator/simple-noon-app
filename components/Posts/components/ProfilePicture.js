import { useContext } from "react";
import PostContext from "../../../contexts/PostContext";

const ProfilePicture = ({ username, profileImg }) => {
  const { listOfPosts } = useContext(PostContext);

  return (
    <div className="profile-picture-container">
      <div className="profile-picture-img-container">
        <img
          className="profile-picture-img"
          src={profileImg}
          alt="Profile Picture"
        />
      </div>
      <span className="profile-picture-username">{username}</span>
      <style jsx>{`
        .profile-picture-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 5%;
        }
        .profile-picture-img-container {
          padding-right: 2%;
        }
        .profile-picture-img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .profile-picture-username {
          color: #4392f1;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProfilePicture;
