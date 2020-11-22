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
    comments,
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
      <PostFooter
        description={description}
        noOfLikes={noOfLikes}
        comments={comments}
      />
      <style jsx>{`
        @media only screen and (min-device-width: 678px) and (max-device-width: 1360px) {
          .post-container {
            width: 50%;
          }
        }
        @media only screen and (min-device-width: 1360px) {
          .post-container {
            width: 33%;
            margin-top: 100px;
          }
        }

        .post-container {
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14),
            0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        .posts-center {
          padding: 30px;
          margin: auto;
        }
      `}</style>
      <hr />
    </div>
  );
};

export default Posts;
