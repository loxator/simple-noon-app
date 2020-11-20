import Layout from "../components/Layout/Layout";
import Posts from "../components/Posts/Posts";

const Home = () => (
  <Layout>
    <div className="index-container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map(() => (
        <Posts />
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

export default Home;
