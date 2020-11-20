import trimString from "../../../utils/trimString";
import Favorite from "../../Favorite/Favorite";

const PostPicture = ({ title, price }) => (
  <div className="post-picture-container">
    <img
      src="https://images.unsplash.com/photo-1605723943830-e050760d2a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=650&q=80"
      alt=""
      className="post-picture-img"
    />

    <div className="post-picture-subcontainer">
      <div className="post-picture-description">
        <p className="post-picture-description-title">{trimString(title)}</p>
        <p className="post-picture-description-price">{price}</p>
      </div>
      <Favorite />
    </div>
    <style jsx>{`
      .post-picture-container {
        position: relative;
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
      .post-picture-description {
        color: white;
        top: 65%;
        font-size: 12px;
        padding: 10px;
      }
    `}</style>
  </div>
);

export default PostPicture;
