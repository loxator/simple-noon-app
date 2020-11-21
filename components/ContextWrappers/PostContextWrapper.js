import PostContext from "../../contexts/PostContext";
import { useState } from "react";

const PostContextWrapper = ({ children, posts }) => {
  const [listOfPosts, setPosts] = useState(posts);
  const [favPosts, setFavPosts] = useState(
    posts.filter((post) => post.isFavorite)
  );

  //Toggle Favorite state of a post
  const toggleFavorite = (id) => {
    const updatedPost = listOfPosts[id];
    updatedPost.isFavorite = !updatedPost.isFavorite;

    if (updatedPost.isFavorite) {
      updatedPost.noOfLikes++;
    } else updatedPost.noOfLikes--;

    const updatedPosts = [
      ...listOfPosts.slice(0, id),
      updatedPost,
      ...listOfPosts.slice(id + 1),
    ];

    setFavPosts(updatedPosts.filter((post) => post.isFavorite));
    setPosts(updatedPosts);
  };
  return (
    <PostContext.Provider value={{ listOfPosts, toggleFavorite, favPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextWrapper;
