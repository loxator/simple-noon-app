import "../styles/globals.css";
import fetch from "isomorphic-unfetch";
import PostContextWrapper from "../components/ContextWrappers/PostContextWrapper";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, posts }) {
  return (
    <PostContextWrapper posts={posts}>
      <Component {...pageProps} />
    </PostContextWrapper>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return { posts };
};
export default MyApp;
