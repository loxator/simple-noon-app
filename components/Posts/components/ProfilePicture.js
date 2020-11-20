const ProfilePicture = ({ username }) => (
  <div className="profile-picture-container">
    <div className="profile-picture-img-container">
      <img
        className="profile-picture-img"
        src="https://randomuser.me/api/portraits/women/31.jpg"
      />
    </div>
    <span>{username}</span>
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
    `}</style>
  </div>
);

export default ProfilePicture;
