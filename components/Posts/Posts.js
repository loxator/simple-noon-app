import PostPicture from "./components/PostPicture";
import PostFooter from "./components/PostFooter";
import ProfilePicture from "./components/ProfilePicture";

const Posts = ({ post }) => {
  const {
    username,
    description,
    title,
    price,
    profileImg,
    postImg,
    noOfLikes,
    id,
    isFavorite,
  } = post;

  return (
    <div className="posts-center post-container">
      <ProfilePicture username={username} profileImg={profileImg} />
      <div className="container">
        <PostPicture
          postImg={postImg}
          title={title}
          price={price}
          noOfLikes={noOfLikes}
          postId={id}
          isFavorite={isFavorite}
        />
      </div>
      <PostFooter description={description} noOfLikes={noOfLikes} />
      <style jsx>{`
        @media only screen and (min-device-width: 800px) {
          .post-container {
            width: 33%;
          }
        }
        .posts-center {
          padding: 30px;
        }
      `}</style>
      <hr />
    </div>
  );
};

export default Posts;
