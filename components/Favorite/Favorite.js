import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div
      className={clsx("icon-container", isFavorite && "favorite")}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <FontAwesomeIcon icon={faHeart} />
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
