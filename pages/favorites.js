import Layout from "../components/Layout/Layout";
import Posts from "../components/Posts/Posts";
import { useContext } from "react";
import PostContext from "../contexts/PostContext";
import { faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Favorites = () => {
  const { favPosts } = useContext(PostContext);

  return (
    <Layout>
      <div className="index-container">
        {favPosts.length ? (
          favPosts.map((post) => <Posts key={post.id} post={post} />)
        ) : (
          <div className="favorites-empty-center">
            <div>
              <FontAwesomeIcon
                size="5x"
                icon={faHeart}
                style={{ color: "4392f1" }}
              />
            </div>
            <p style={{ textAlign: "center" }}>
              Nothing here yet! Once you like some posts, they will appear here
            </p>
          </div>
        )}
      </div>
      <style jsx>{`
        @media only screen and (min-device-width: 768px) {
          .index-container {
            display: flex;
            flex-wrap: wrap;
          }
        }

        .favorites-empty-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          padding-top: 45vh;
        }
      `}</style>
    </Layout>
  );
};

export default Favorites;
