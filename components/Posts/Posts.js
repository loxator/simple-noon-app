import PostPicture from "./components/PostPicture";
import PostFooter from "./components/PostFooter";
import ProfilePicture from "./components/ProfilePicture";
const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi possimus,
porro soluta ducimus molestiae, velit optio, nisi cupiditate praesentium
nostrum eos officiis sunt dolor minus sint cum consectetur facilis
perferendis.`;
const Posts = () => (
  <div className="posts-center post-container">
    <ProfilePicture username="amin.limbada" />
    <div className="container">
      <PostPicture title={"title"} price="AED 100" />
    </div>
    <PostFooter description={lorem} />
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

export default Posts;
