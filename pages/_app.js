import "../styles/globals.css";

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
  let posts = [];
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    posts = await response.json();
  } catch (error) {
    console.log("error", error);
  }

  return { posts };
};
export default MyApp;
