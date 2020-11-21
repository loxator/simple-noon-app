import PostContext from "../../contexts/PostContext";
import { useState, useEffect } from "react";

const PostContextWrapper = ({ children, posts }) => {
  const [listOfPosts, setPosts] = useState([]);
  const [favPosts, setFavPosts] = useState([]);
  useEffect(() => {
    if (
      localStorage.getItem("favorites") &&
      localStorage.getItem("favorites").length
    ) {
      setFavPosts(JSON.parse(localStorage.getItem("favorites")));
    } else {
      setFavPosts(posts.filter((post) => post.isFavorite));
    }
    if (localStorage.getItem("posts") && localStorage.getItem("posts").length) {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    } else {
      setPosts(posts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favPosts));
    localStorage.setItem("posts", JSON.stringify(listOfPosts));
  }, [favPosts, posts]);

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
