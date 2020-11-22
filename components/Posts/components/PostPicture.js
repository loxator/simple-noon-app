import { useState } from "react";
import Favorite from "../../Favorite/Favorite";

const PostPicture = ({
  title,
  price,
  postImg,
  noOfLikes,
  postId,
  isFavorite,
}) => {
  return (
    <div className="post-picture-container">
      <img src={postImg} alt="Picture of Item" className="post-picture-img" />

      <div className="post-picture-subcontainer">
        <div className="post-picture-description">
          <p className="post-picture-description-title">{title}</p>
          <p className="post-picture-description-price">
            <strong>AED {price}</strong>
          </p>
        </div>
        <Favorite
          noOfLikes={noOfLikes}
          postId={postId}
          isFavorite={isFavorite}
        />
      </div>
      <style jsx>{`
        .post-picture-container {
          position: relative;
          margin: auto;
        }

        .post-picture-img {
          max-width: 100%;
          max-height: 100%;
          display: block;
        }

        .post-picture-subcontainer {
          display: flex;
          align-items: center;
          position: absolute;
          top: 75%;
          width: 100%;
          padding: 5%;
          justify-content: space-between;
        }
        @media only screen and (max-device-width: 425px) {
          .post-picture-subcontainer {
            top: 50%;
          }
        }
        @media only screen and (min-device-width: 425px) and (max-device-width: 1000px) {
          .post-picture-subcontainer {
            top: 60%;
          }
        }

        .post-picture-description {
          color: white;
          top: 65%;
          font-size: 16px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default PostPicture;
