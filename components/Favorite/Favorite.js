import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import PostContext from "../../contexts/PostContext";
import clsx from "clsx";

const Favorite = ({ isFavorite, postId }) => {
  const { toggleFavorite } = useContext(PostContext);

  return (
    <div
      className={clsx("icon-container", isFavorite && "favorite")}
      onClick={() => toggleFavorite(postId)}
    >
      <FontAwesomeIcon size="2x" icon={faHeart} />
      <style jsx>{`
        .icon-container {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          background-color: #fafafa;
          padding: 10px;
        }
        .favorite {
          color: #4ca5d4;
        }
      `}</style>
    </div>
  );
};

export default Favorite;
