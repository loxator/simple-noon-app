import Layout from "../components/Layout/Layout";
import Posts from "../components/Posts/Posts";
import { useContext } from "react";
import PostContext from "../contexts/PostContext";

const Home = () => {
  const { listOfPosts } = useContext(PostContext);

  return (
    <Layout>
      <div className="index-container">
        {listOfPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
      <style jsx>{`
        @media only screen and (min-device-width: 800px) {
          .index-container {
            display: flex;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
